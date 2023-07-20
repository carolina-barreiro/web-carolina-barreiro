import Image1 from "./images/todolist.png";
import Image2 from "./images/quizreact.png";
import Image3 from "./images/quizreactts.png";

export const projectsData = [
    {
        id: 0,
        title: 'To-do list',
        urlGit: 'https://github.com/carolina-barreiro/React-todo-list-app',
        urlWeb: 'https://carolina-barreiro.github.io/React-todo-list-app/',
        srcImage: Image1,
        description:'Web application where you can track your tasks, you can add or delete new tasks and also filter them.',
        technologies: [{
            id: 0,
            tech: 'React'
        },
        {
            id: 1,
            tech: 'Bootstrap'
        }]
    },
    {
        id: 1,
        title: 'Simple Quiz game',
        urlGit: 'https://github.com/carolina-barreiro/Quiz-game-react',
        urlWeb: 'https://carolina-barreiro.github.io/Quiz-game-react/',
        srcImage: Image2,
        description:'A quiz in a web application with 10 questions and in the end you get your total score of correct answers.',
        technologies: [{
            id: 0,
            tech: 'React'
        },
        {
            id: 1,
            tech: 'Bootstrap'
        }]
    },
    {
        id: 2,
        title: 'Quiz game with random questions',
        urlGit: 'https://github.com/carolina-barreiro/GameQuiz-React_Typescript',
        urlWeb: 'https://carolina-barreiro.github.io/GameQuiz-React_Typescript/',
        srcImage: Image3,
        description:'A quiz app but in the beginning you can choose the category and level of dificulty of the quiz and the questions are always random because I used an API.',
        technologies: [{
            id: 0,
            tech: 'React'
        },
        {
            id: 1,
            tech: 'Bootstrap'
        },
        {
            id: 2,
            tech: 'Typescript'
        }]
    }
]