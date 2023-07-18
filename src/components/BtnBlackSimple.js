import './BtnBlackSimple.css';
import CV_Carolina_Barreiro_en from '../assets/CV_Carolina_Barreiro_en.pdf';
import Button from 'react-bootstrap/Button';

export default function BtnBlackSimple(props) {

    return (
        <Button className={`btn-custom font-spline ${props.noturnView ? 'dark-mode-background' : ''}`} href={props.link === 'cv' ? CV_Carolina_Barreiro_en : '#'}
            download={props.link === 'cv' ? 'CV_Carolina_Barreiro_en' : ''}>{props.txt}</Button>
    );
}
