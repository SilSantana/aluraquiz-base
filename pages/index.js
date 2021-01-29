import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import ListQuiz from '../src/components/ListQuiz';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
        <meta name="theme-color" content="#f44336" />
        <meta name="description" content={db.description} />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Digite seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>

            <p>Confira aqui alguns quizes da galera da imersão react alura...</p>

            <ListQuiz>
              <ul>
                <li>
                  <a href="https://alura-quiz-avengers.fernanda-kipper.vercel.app/" target="_blank">Avengers Endgame</a>
                </li>
                <li>
                  <a href="https://aluraquiz-harrypotter.karinarovani.vercel.app/" target="_blank">harrypotter</a>
                </li>
                <li>
                  <a href="https://theofficequiz.brunaguedes92.vercel.app/" target="_blank">theofficequiz</a>
                </li>
                <li>
                  <a href="https://batuquequiz.fihcapua.vercel.app/" target="_blank">batuquequiz</a>
                </li>
                <li>
                  <a href="https://imersao-alura-viking-quiz.gsmenezes.vercel.app/" target="_blank">viking</a>
                </li>
              </ul>
            </ListQuiz>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/SilSantana" />
    </QuizBackground>
  );
}
