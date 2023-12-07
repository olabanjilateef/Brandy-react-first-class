import React from 'react'

const Form = () => {
  return (
    <div><form>
    <img class="mb-4" src="data:image/png;base64,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" alt="" width="72" height="57"/>
    <h1 class="h3 mb-30 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
  </form></div>
  )
}

export default Form