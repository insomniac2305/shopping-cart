function Button({ onClick, Icon, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-8 px-2 items-center justify-center rounded-lg bg-violet-600 font-bold text-white transition hover:bg-violet-500 active:bg-violet-700"
    >
      <span className="text-xl">
        <Icon />
      </span>
      &nbsp;{text}
    </button>
  );
}

export default Button;
