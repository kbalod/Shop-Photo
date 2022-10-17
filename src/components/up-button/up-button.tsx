function UpButton(): JSX.Element {
  return (
    <a className="up-btn" href="#header" onClick={(e) => {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    }}
    >
      <svg width="12" height="18" aria-hidden="true">
        <use xlinkHref="#icon-arrow2"></use>
      </svg>
    </a>
  );
}

export default UpButton;
