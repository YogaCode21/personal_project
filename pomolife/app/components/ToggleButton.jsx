const ToggleButton = ({ pomodoro, setPomodoro }) => {
  function togglePausePlay() {
    setPomodoro((prevPomodoro) => {
      return {
        ...prevPomodoro,
        isPaused: !prevPomodoro.isPaused,
      };
    });
  }

  return (
    <button
      onClick={togglePausePlay}
      className="font-bold m-2 text-1xl text-base uppercase tracking-[0.3rem]">
      {pomodoro.isPaused ? "Start" : "Pause"}
    </button>
  );
};

export default ToggleButton;
