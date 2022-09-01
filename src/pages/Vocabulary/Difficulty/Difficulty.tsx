import { useEffect } from 'react';
import { DIFFICULTY } from '../../../common/constants/difficultyLevels';
import DifficultyCard from '../../../components/DifficultyCard/DifficultyCard';
import classes from './Difficulty.module.scss';
import { Init } from './Interfaces';

const Difficulty = ({ curLevel, setCurLevel, setAccentColor, setPage }: Init) => {
  const initStyle = () => {
    const cards = document.querySelectorAll('.card');
    const { style } = cards[curLevel] as HTMLElement;
    const { color } = DIFFICULTY[curLevel];
    setAccentColor(color);
    style.background = color;
    style.borderColor = color;
  };

  useEffect(() => initStyle(), []);

  return (
    <div className={classes.section}>
      <p className={classes.paragraph}>Выберите уровень сложности</p>
      <div className={classes.container}>
        {DIFFICULTY.map((item) => (
          <DifficultyCard
            key={item.id}
            color={item.color}
            id={item.id}
            curLevel={curLevel}
            setLevel={setCurLevel}
            setAccentColor={setAccentColor}
            setPage={setPage}
          >
            <h4 className={classes.header}>{item.level}</h4>
            <p className={classes.detailed}>
              <span>{item.detailed}</span>
            </p>
          </DifficultyCard>
        ))}
      </div>
    </div>
  );
};

export default Difficulty;
