import { useState } from "react";

const CalcCcal = () => {
  const [inputAgeValue, setInputAgeValue] = useState("");
  const [inputHeightValue, setInputHeightValue] = useState("");
  const [inputWeightValue, setInputWeightValue] = useState("");
  const [yourCcal, setYourCcal] = useState(0);
  const [genderValue, setGenderValue] = useState("");
  const [avctivityValue, setActivitySelect] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (genderValue === "male") {
      const localYourCcal =
        66.473 +
        13.7516 * inputWeightValue +
        5.0033 * inputHeightValue -
        6.755 * inputAgeValue;
      setYourCcal(avctivityValue * localYourCcal);
    } else if (genderValue === "female") {
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
    <div>
      <p>Calculator ccal</p>
      <div>
        <form onSubmit={onSubmit}>
          <br />
          Возраст, лет
          <br />
          <input
            type="number"
            value={inputAgeValue}
            onChange={(event) => setInputAgeValue(event.target.value)}
            min="18"
          />
          <br />
          <br />
          Рост, в см
          <br />
          <input
            type="number"
            value={inputHeightValue}
            onChange={(event) => setInputHeightValue(event.target.value)}
            min="150"
          />
          <br />
          <br />
          Вес, в кг
          <br />
          <input
            type="number"
            value={inputWeightValue}
            onChange={(event) => setInputWeightValue(event.target.value)}
            min="35"
          />
          <br />
          <br />
          Пол <br />
          <input
            type="radio"
            id="genderMale"
            onChange={onChangeGenderValue}
            value="male"
            checked={genderValue === "male" ? true : false}
          />
          <label for="genderMale">Мужской</label>
          <input
            type="radio"
            id="genderMale"
            onChange={onChangeGenderValue}
            value="female"
            checked={genderValue === "female" ? true : false}
          />
          <label for="genderMale">Женский</label>
          <br />
          <br />
          Степень физической активности <br />
          <select value={avctivityValue} onChange={changeActivitySelect}>
            <option value="1.2">Нет активности</option>
            <option value="1.375">Умеренная активность</option>
            <option value="1.55">Средняя активность</option>
            <option value="1.725">Высокая активность</option>
            <option value="1.9">Спортсмены</option>
          </select>
          <br />
          <br />
          <button>Рассчитать</button>
          <p>Ваша суточная норма калорий: {Math.ceil(yourCcal)}</p>
        </form>
      </div>
    </div>
  );
};
export default CalcCcal;
