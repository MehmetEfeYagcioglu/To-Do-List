import React, { useState } from "react"; // useState'i import ettik
import "./App.css";

function App() {
  const [textValue, setTextValue] = useState(""); // Textarea verisini tutar
  const [items, setItems] = useState([]); // Yapılacaklar listesini tutar
  const [completedItems, setCompletedItems] = useState([]); // Tamamlanan maddeleri tutar

  // Textarea değerini güncelleyen fonksiyon
  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  // Butona basıldığında çağrılan fonksiyon
  const handleClick = () => {
    // Metni Yapılacaklar Listesi'ne ekle
    if (textValue.trim() !== "") {
      setItems([...items, textValue.trim()]);
      setTextValue(""); // Textarea'yı temizle
    }
  };

  // Checkbox durumunu güncelleyen fonksiyon
  const handleCheckboxChange = (index) => {
    const newCompletedItems = [...completedItems];
    if (newCompletedItems.includes(index)) {
      // Tamamlanmışsa kaldır
      setCompletedItems(newCompletedItems.filter(i => i !== index));
    } else {
      // Tamamlanmamışsa ekle
      setCompletedItems([...newCompletedItems, index]);
    }
  };

  return (
    <div>
      <div className="h1-text">
        <h2 className="List">Yapılacaklar Listesi</h2>
        <br />

        <table className="listData">
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "light" : "dark"}>
                <td>
                  <input
                    type="checkbox"
                    checked={completedItems.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td>{item}</td> {/* Metin */}
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="Finished">Tamamlananlar</h2>
        <br />

        <table className="listData1">
          <tbody>
            {items.filter((_, index) => completedItems.includes(index)).map((item, index) => (
              <tr key={index}>
                <td className="light">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      {/* Textarea */}
      <div className="TextArea">
        <textarea
          value={textValue}
          onChange={handleChange}
          placeholder="Buraya bir şeyler yazın..."
        />
      </div>

      <div className="Button">
        {/* Buton */}
        <button onClick={handleClick}>Mesajı Gönder</button>
      </div>
    </div>
  );
}

export default App;
