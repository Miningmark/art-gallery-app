export default function CommentForm({ onSetComment, index }) {
  function handleOnSubmit(event) {
    event.preventDefault();
    // console.log("event: ", event.target.form[0].value);
    const newComment = event.target.form[0].value;
    if (newComment !== "") {
      onSetComment(index, newComment);
    }
    event.target.form[0].value = "";
  }
  return (
    <>
      <form onClick={handleOnSubmit}>
        <input type="text" />
        <button type="submit">send</button>
      </form>
    </>
  );
}
