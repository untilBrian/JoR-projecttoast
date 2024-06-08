import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf'


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("");
  const [input, setInput] = React.useState("");
  const [isClosed, setIsClosed] = React.useState(true)
  const [toastObject, setToastObject] = React.useState({isClosed: true})
  const [toastObjects, setToastObjects] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    //new toast object
    setIsClosed(false)
    const newToastObject = {
      id: Math.random(),
      variant: variant, 
      message: input,
      isClosed: isClosed, 
      handleClose: () => handleClose(newToastObject.id)
    };

    setToastObject(newToastObject)

    //add toast object to toastObjects
    const nextToastObjects = [...toastObjects];
    nextToastObjects.push(newToastObject)
    setToastObjects(nextToastObjects)
    
  }

  function handleClose() {
    const newToastObject = {...toastObject};
    newToastObject.isClosed = true;
    setToastObject(newToastObject);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastObjects={toastObjects}/>

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}> 
          <div className={styles.row}>
              <label
                htmlFor="message"
                className={styles.label}
                style={{ alignSelf: 'baseline' }}
              >
                Message
              </label>
              <div className={styles.inputWrapper}>
                <textarea
                  id="message" 
                  className={styles.messageInput}
                  value={input}
                  onChange={(e) => {setInput(e.target.value)}}
                /> 
              </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                {VARIANT_OPTIONS.map(option => (
                  <div key={option}>
                    <input
                      id={option}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={option === variant}
                      onChange={(e) => {setVariant(e.target.value)}}
                    />
                    <label htmlFor={option}>
                      {option}
                    </label>
                  </div>
                ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
