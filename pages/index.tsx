import type {NextPage} from 'next';
import styles from '../styles/Home.module.css';
import {Htag, Button} from "../components";
import {log} from "util";



const Home: NextPage = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Htag tag="h1"> Текст2 </Htag>
            <Button appearance={"primary"} onClick={() => console.log('click!')}>Кнопка</Button>
            <Button  appearance={"ghost"} className="newClass">Другая кнопка</Button>
        </div>
    );
};

export default Home;
