import styles from './index.module.css';
import ProjectForm from '../../components/form/ProjectForm/ProjectForm';
import background from '../../assets/background.jpg';

function SignUp() {
    return (
        <div className={styles.container} >
          <ProjectForm />
          <img src={background} alt='background' />
        </div >
    );
}

export default SignUp;
