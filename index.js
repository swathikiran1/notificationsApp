const Notification = (props) => {
  //  Write your code here.
  const { message, className1, className2, className3, imgUrl } = props;
  return (
    <div className={className1}>
      <img className={className2} src={imgUrl} />
      <p className={className3}>{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div>
      <Notification
        message="Information Message"
        className1="notification1"
        className2="icon"
        className3="message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        message="Success Message"
        className1="notification2"
        className2="icon"
        className3="message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        message="Warning Message"
        className1="notification3"
        className2="icon"
        className3="message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        message="Error Message"
        className1="notification4"
        className2="icon"
        className3="message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
