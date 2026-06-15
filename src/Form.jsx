function handelSubmit(event) {
  event.preventDefault();
  return console.log("form submitted");
}
export default function Form() {
  return (
    <>
      <form onSubmit={handelSubmit} action="">
        <input type="text" placeholder="Write something" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
