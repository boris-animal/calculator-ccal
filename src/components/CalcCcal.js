import { useState } from "react";
import "./CalcCcal.scss";

const CalcCcal = () => {
  const [inputAgeValue, setInputAgeValue] = useState("");
  const [inputHeightValue, setInputHeightValue] = useState("");
  const [inputWeightValue, setInputWeightValue] = useState("");
  const [yourCcal, setYourCcal] = useState(0);
  const [genderValue, setGenderValue] = useState("male");
  const [avctivityValue, setActivitySelect] = useState("1");

  const onSubmit = (event) => {
    event.preventDefault();
    if (genderValue === "male") {
      const localYourCcal =
        66.473 +
        13.7516 * inputWeightValue +
        5.0033 * inputHeightValue -
        6.755 * inputAgeValue;
      setYourCcal(avctivityValue * localYourCcal);
    } else {
      const localYourCcal =
        655.0955 +
        9.5634 * inputWeightValue +
        1.8496 * inputHeightValue -
        4.6756 * inputAgeValue;
      setYourCcal(avctivityValue * localYourCcal);
    }
  };

  function onChangeGenderValue(event) {
    setGenderValue(event.target.value);
  }

  function changeActivitySelect(event) {
    setActivitySelect(event.target.value);
  }

  return (
    <div className="calc-ccal">
      <p className="calc-ccal__title">Calculator ccal</p>

      <form onSubmit={onSubmit} className="calc-ccal__form ccal-form">
        <div className="ccal-form__input form-input">
          <label className="form-input__title" htmlFor="inputAgeValue">
            Возраст, лет
          </label>
          <input
            className="form-input__control"
            type="number"
            id="inputAgeValue"
            value={inputAgeValue}
            required
            placeholder="Введите Ваш возраст"
            onChange={(event) => setInputAgeValue(event.target.value)}
            min="18"
          />
        </div>
        <div className="ccal-form__input form-input">
          <label
            className="form-input__title form-input"
            htmlFor="inputHeightValue"
          >
            Рост, в см
          </label>
          <input
            type="number"
            className="form-input__control"
            id="inputHeightValue"
            value={inputHeightValue}
            required
            placeholder="Введите Ваш рост"
            onChange={(event) => setInputHeightValue(event.target.value)}
            min="150"
          />
        </div>
        <div className="ccal-form__input form-input">
          <label className="form-input__title" htmlFor="inputWeightValue">
            Вес, в кг
          </label>
          <input
            type="number"
            className="form-input__control"
            id="inputWeightValue"
            value={inputWeightValue}
            required
            placeholder="Введите Ваш вес"
            onChange={(event) => setInputWeightValue(event.target.value)}
            min="35"
          />
        </div>
        <div className="ccal-form__input form-input">
          <p className="form-input__title">Пол</p>
          <div className="form-input__gender-control gender-control">
            <div className="gender-control__item gender-item">
              <input
                type="radio"
                className="gender-item__value"
                id="genderMale"
                onChange={(event) => setGenderValue(event.target.value)}
                value="male"
                checked={genderValue === "male" ? true : false}
              />
              <label className="gender-item__title" htmlFor="genderMale">
                Мужской
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="gender-item__value"
                id="genderFemale"
                onChange={(event) => setGenderValue(event.target.value)}
                value="female"
                checked={genderValue === "female" ? true : false}
              />
              <label className="gender-item__title" htmlFor="genderFemale">
                Женский
              </label>
            </div>
          </div>
        </div>
        <div className="ccal-form__input form-input">
          <label htmlFor="avctivityValueTitle" className="form-input__title">
            Степень физической активности
          </label>
          <select
            id="avctivityValue"
            className="form-input__control"
            value={avctivityValue}
            onChange={changeActivitySelect}
          >
            <option value="1" defaultValue>
              Базальный метаболизм
            </option>
            <option value="1.2">Сидячий образ жизни</option>
            <option value="1.375">
              Умеренная активность(1-2 тренировки в неделю)
            </option>
            <option value="1.55">
              Средняя активность(3-5 тренировки в неделю)
            </option>
            <option value="1.725">
              Высокая активность(5-7 тренировки в неделю)
            </option>
            <option value="1.9">Спортсмены</option>
          </select>
        </div>
        <button className="ccal-form__button">Рассчитать</button>
      </form>
      {yourCcal !== 0 && (
        <p className="calc-ccal__answer">
          Ваша суточная норма калорий: {Math.ceil(yourCcal)}
        </p>
      )}
    </div>
  );
};
export default CalcCcal;
