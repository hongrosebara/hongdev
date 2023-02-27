import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvdrvjb")

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="input-group__item input-group__name">
          <input type="text" name="name" id="full-name" placeholder="NAME" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="input-group__item input-group__email">
          <input id="email" type="email" name="email" placeholder="EMAIL" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="input-group__item input-group__message">
          <textarea id="message" name="message" placeholder="MESSAGE" required/>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="input-group__submit">
          <button type="submit" disabled={state.submitting}>
            SEND MESSAGE
          </button>
        </div>

      </div>
    </form>
  )
}
export default Contact
