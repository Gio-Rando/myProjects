import pygame , sys , random
from pygame.math import Vector2


class SNAKE:
    def __init__(self):
        self.body = [Vector2(5, 10), Vector2(4,10) , Vector2(3,10)]
        self.direction = Vector2(1,0)
        self.new_block = False

    def draw_snake(self):
        for block in self.body:
            x_pos = int(block.x * cell_size)
            y_pos = int(block.y * cell_size)
            block_rect = pygame.Rect(x_pos,y_pos, cell_size,cell_size)
            pygame.draw.rect(screen, (125 , 0 ,255) , block_rect)
    
    def move_snake(self):
        if self.new_block == True:
            body_copy = self.body[:]
            body_copy.insert(0, body_copy[0] + self.direction)
            self.body = body_copy[:]
            self.new_block = False
        else:
            body_copy = self.body[:-1]
            body_copy.insert(0, body_copy[0] + self.direction)
            self.body = body_copy[:]
    
    def add_block(self):
        self.new_block = True


class FRUIT:
    def __init__(self):
        self.randomize()

    def draw_fruit(self):
        fruit_rect = pygame.Rect(int(self.pos.x * cell_size), int(self.pos.y * cell_size), cell_size , cell_size)
        pygame.draw.rect(screen ,(255,0,0), fruit_rect)
    
    def randomize(self):
        self.x = random.randint(0,cell_num - 1)
        self.y = random.randint(0,cell_num - 1)
        self.pos = Vector2(self.x , self.y)

class MAIN:
    def __init__(self):
        self.snake = SNAKE()
        self.fruit = FRUIT()
    def update(self):
        self.snake.move_snake()
        self.check_collision()
        self.check_fail()
    def draw_elements(self):
        self.fruit.draw_fruit()
        self.snake.draw_snake()
        self.draw_score()
    def check_collision(self):
        if self.fruit.pos == self.snake.body[0]:
            self.fruit.randomize()
            self.snake.add_block()
    def check_fail(self):
        if not 0 <= self.snake.body[0].x < cell_num or not 0 <= self.snake.body[0].y < cell_num:
            self.game_over()
        for block in self.snake.body[1:]:
            if block == self.snake.body[0]:
                self.game_over()
    def game_over(self):
            pygame.quit()
            sys.exit()
    def draw_score(self):
        score_text = str(len(self.snake.body) - 3)
        score_surface = game_font.render(score_text,True,(255,255,255))
        score_x = int(cell_size * cell_num - 60)
        score_y = int(cell_size * cell_num - 40)
        score_rect = score_surface.get_rect(center = (score_x,score_y))
        screen.blit(score_surface,score_rect)

pygame.init()
cell_size = 40
cell_num = 20
screen = pygame.display.set_mode((cell_num * cell_size, cell_num * cell_size))
clock = pygame.time.Clock()
game_font = pygame.font.Font(None , 80)

SCREEN_UPDATE = pygame.USEREVENT
pygame.time.set_timer(SCREEN_UPDATE, 150)

main_game = MAIN()

while True:

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == SCREEN_UPDATE:
            main_game.update()
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_w:
                if main_game.snake.direction.y != 1:
                    main_game.snake.direction = Vector2(0,-1)
            if event.key == pygame.K_s:
                if main_game.snake.direction.y != -1:
                    main_game.snake.direction = Vector2(0,1)
            if event.key == pygame.K_d:
                if main_game.snake.direction.x != -1:
                    main_game.snake.direction = Vector2(1,0)
            if event.key == pygame.K_a:
                if main_game.snake.direction.x != 1:
                    main_game.snake.direction = Vector2(-1,0)


    screen.fill("green")
    main_game.draw_elements()
    pygame.display.update()
    clock.tick(60)