import type {NextPage} from 'next';
import styles from '../styles/Home.module.css';
import {Htag, Button} from "../components";
import P from "../components/P/P";

const Home: NextPage = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Htag tag="h1"> Текст2 </Htag>
            <Button appearance={"primary"} arrow={"down"} onClick={() => console.log('click!')}>Кнопка</Button>
            <Button  appearance={"ghost"} arrow={"right"} className="newClass">Другая кнопка</Button>
            <P fontSize="s">маленький</P>
            <P fontSize="m">средний</P>
            <P fontSize="l">Большой</P>
        </div>
    );
};

export default Home;
