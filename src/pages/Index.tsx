import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">vhoodoo Master</div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О мастере</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">Процесс</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:block">Связаться</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Дерево с характером,<br />изделия с душой
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Создаю уникальные изделия из дерева, которые служат десятилетиями. 
                Каждая работа — это воплощение мастерства и любви к натуральным материалам.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">Заказать изделие</Button>
                <Button size="lg" variant="outline" className="text-lg">Посмотреть работы</Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/02781070-366f-4e63-a503-92e238e883aa/files/f6756051-9031-4a5c-8507-5a7c9f66845b.jpg" 
                alt="Мастерская" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/02781070-366f-4e63-a503-92e238e883aa/files/02418eb4-5889-4d68-bf9d-6181bb451b23.jpg" 
                alt="Мастер за работой" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">О мастере</h2>
              <p className="text-lg text-foreground mb-4">
                15 лет работы с деревом научили меня чувствовать материал и раскрывать его природную красоту. 
                Каждая доска уникальна, и моя задача — создать изделие, которое подчеркнет её характер.
              </p>
              <p className="text-lg text-foreground mb-6">
                В своей работе использую традиционные техники обработки дерева в сочетании с современными 
                технологиями. Это позволяет создавать изделия высочайшего качества, которые прослужат поколениям.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">изделий</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Портфолио работ</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Каждое изделие создается вручную с особым вниманием к деталям
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/02781070-366f-4e63-a503-92e238e883aa/files/d4d4a8b7-739e-4de2-a6e6-3181de5614b7.jpg" 
                    alt={`Работа ${item}`} 
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">Изделие из дерева</h3>
                  <p className="text-muted-foreground">Уникальная ручная работа</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Услуги</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Работаю над проектами любой сложности — от небольших аксессуаров до полноценной мебели
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Armchair" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Мебель на заказ</h3>
              <p className="text-muted-foreground">
                Столы, стулья, шкафы и другая мебель по индивидуальным размерам и дизайну
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Home" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Декор интерьера</h3>
              <p className="text-muted-foreground">
                Панно, полки, рамы, декоративные элементы для создания уютной атмосферы
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">Подарочные изделия</h3>
              <p className="text-muted-foreground">
                Уникальные сувениры, шкатулки, разделочные доски с гравировкой
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Процесс работы</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            От идеи до готового изделия — прозрачный и понятный процесс
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Обсуждение</h3>
              <p className="text-muted-foreground">
                Выясняем ваши пожелания, обсуждаем идеи и возможности
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Эскиз</h3>
              <p className="text-muted-foreground">
                Создаю эскиз будущего изделия с учетом всех деталей
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Изготовление</h3>
              <p className="text-muted-foreground">
                Работаю над изделием, держу вас в курсе процесса
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Доставка</h3>
              <p className="text-muted-foreground">
                Передаю готовое изделие с гарантией качества
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Отзывы клиентов</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Слова тех, кто уже получил свои уникальные изделия
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" size={20} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "Заказывал обеденный стол из массива дуба. Результат превзошел все ожидания! 
                Качество исполнения на высшем уровне, видно что мастер вкладывает душу в работу."
              </p>
              <div className="font-semibold text-primary">Александр К.</div>
            </Card>
            <Card className="p-6">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" size={20} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "Очень довольна деревянными полками для гостиной. Мастер учел все пожелания, 
                изделия идеально вписались в интерьер. Рекомендую!"
              </p>
              <div className="font-semibold text-primary">Мария П.</div>
            </Card>
            <Card className="p-6">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" size={20} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "Заказал в подарок разделочную доску с гравировкой. Получилось невероятно красиво! 
                Натуральное дерево, качественная обработка, уникальный дизайн."
              </p>
              <div className="font-semibold text-primary">Дмитрий В.</div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">Контакты</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Свяжитесь со мной для обсуждения вашего проекта
            </p>
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-6">Напишите мне</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="Расскажите о вашем проекте"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">Отправить заявку</Button>
                  </form>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-6">Другие способы связи</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={24} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-foreground">Телефон</div>
                        <a href="tel:+79001234567" className="text-muted-foreground hover:text-primary">
                          +7 (900) 123-45-67
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={24} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <a href="mailto:info@vhoodoo.ru" className="text-muted-foreground hover:text-primary">
                          info@vhoodoo.ru
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={24} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-foreground">Адрес мастерской</div>
                        <div className="text-muted-foreground">
                          г. Москва, ул. Мастеров, 15
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={24} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium text-foreground">Режим работы</div>
                        <div className="text-muted-foreground">
                          Пн-Пт: 9:00 - 18:00<br />
                          Сб-Вс: по договоренности
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">vhoodoo Master</div>
          <p className="text-primary-foreground/80 mb-4">
            Дерево с характером, изделия с душой
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
          <div className="text-sm text-primary-foreground/60">
            © 2024 vhoodoo Master. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
