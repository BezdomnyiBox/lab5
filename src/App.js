import React from 'react';
import './App.css';
import VotingForm from './VotingForm';
import Messi from './images/Messi.jpeg';
import Mbappe from './images/Mbappe.jpg';
import Holland from './images/Holland.jpg';



const App = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Добро пожаловать на голосование!</h1>
      </header>
      <section id="aboutUs">
        <h2>Уважаемый посетитель сайта!</h2>
        <p>В нашем сайте вы можете напрямую повлиять на будущего обладателя золотого мяча по результатам 2023 года.
          Для этого просим вас выбрать и проголосовать за одного фаворита. Отнеситесь к выбору с ответственностью, возможно именно ваш голос станет решающим!
        </p>
      </section>
      <section id="mainContent">
        <h2>Претенденты на Золотой мяч 2023:</h2>
        <div class="topImages">
          <div class="img200_200">
            <img src={Messi} />
          </div>
          <div class="img200_200">
            <img src={Mbappe} />
          </div>
          <div class="img200_200">
            <img src={Holland} />
          </div>
        </div>
        <VotingForm />
      </section>
      <section id="contact">
        <h2>Наши контакты</h2>
        <p>Вы можете связаться с нами по номеру 89998880077 или по электронной почте Ballon@mail.ru</p>
      </section>
      <footer>
        <p>© {new Date().getFullYear()} Ballon Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
