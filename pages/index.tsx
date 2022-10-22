import type {NextPage} from 'next';
import styles from '../styles/Home.module.css';
import {Htag} from "../components";
import Button from "../components/Button/Button";



const Home: NextPage = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Htag tag="h1"> Текст2 </Htag>
            <Button appearance={"primary"}>Кнопка</Button>
            <Button appearance={"ghost"}>Другая кнопка</Button>
        </div>
    );
};

export default Home;
