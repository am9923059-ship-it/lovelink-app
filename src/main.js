import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="page">
    <header class="topbar">
      <a class="brand" href="#" aria-label="LoveLink home">
        <span class="brand-icon">♥</span>
        <span>Love<span class="brand-pink">Link</span></span>
      </a>
      <button class="top-login" id="topLogin">Log in</button>
    </header>

    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow"><span>♥</span> YOUR STORY STARTS HERE</div>
        <h1>Real people.<br>Real feelings.<br><span>One connection.</span></h1>
        <p class="intro">
          Meet someone who makes your heart smile.
          Your next beautiful story could start today.
        </p>

        <div class="features">
          <div class="feature"><span class="feature-icon">♡</span><div><b>Meaningful connections</b><small>Meet people who share your interests.</small></div></div>
          <div class="feature"><span class="feature-icon">✦</span><div><b>Your pace, your story</b><small>Build a connection naturally.</small></div></div>
          <div class="feature"><span class="feature-icon">✓</span><div><b>Safety matters</b><small>Verification features are planned.</small></div></div>
        </div>
      </div>

      <section class="auth-card" aria-label="Account">
        <div class="card-hearts">♡</div>
        <div class="card-heading">
          <div class="mini-label">WELCOME TO LOVELINK</div>
          <h2 id="formTitle">Find your person.</h2>
          <p id="formSubtitle">Create an account and start your story.</p>
        </div>

        <div class="tabs">
          <button class="tab active" id="signupTab">Create account</button>
          <button class="tab" id="loginTab">Log in</button>
        </div>

        <form id="authForm">
          <div class="field" id="nameField">
            <label for="fullName">Your name</label>
            <input id="fullName" name="fullName" placeholder="What should we call you?" autocomplete="name" required>
          </div>

          <div class="field">
            <label for="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required>
          </div>

          <div class="field">
            <label for="password">Password</label>
            <input id="password" name="password" type="password" placeholder="At least 8 characters" minlength="8" autocomplete="new-password" required>
          </div>

          <div class="form-error" id="formMessage" role="status"></div>
          <button class="submit-btn" type="submit" id="submitBtn">Create my account <span>→</span></button>
        </form>

        <p class="terms">By continuing, you agree to use LoveLink respectfully and honestly.</p>
        <div class="secure-note"><span>♡</span> Your story. Your choices. Your privacy.</div>
      </section>
    </section>

    <footer>
      <span>♥ LoveLink</span>
      <span>Made for meaningful connections</span>
    </footer>
  </main>
`

let mode = 'signup'

function setMode(nextMode) {
  mode = nextMode
  const signup = mode === 'signup'

  document.querySelector('#signupTab').classList.toggle('active', signup)
  document.querySelector('#loginTab').classList.toggle('active', !signup)
  document.querySelector('#nameField').hidden = !signup
  document.querySelector('#fullName').required = signup
  document.querySelector('#password').autocomplete = signup ? 'new-password' : 'current-password'
  document.querySelector('#formTitle').textContent = signup ? 'Find your person.' : 'Welcome back.'
  document.querySelector('#formSubtitle').textContent = signup
    ? 'Create an account and start your story.'
    : 'Log in to continue your story.'
  document.querySelector('#submitBtn').innerHTML = signup
    ? 'Create my account <span>→</span>'
    : 'Log in to LoveLink <span>→</span>'
  document.querySelector('#formMessage').textContent = ''
}

document.querySelector('#signupTab').addEventListener('click', () => setMode('signup'))
document.querySelector('#loginTab').addEventListener('click', () => setMode('login'))
document.querySelector('#topLogin').addEventListener('click', () => {
  setMode('login')
  document.querySelector('#email').focus()
})

document.querySelector('#authForm').addEventListener('submit', (event) => {
  event.preventDefault()
  const message = document.querySelector('#formMessage')
  const email = document.querySelector('#email').value.trim()
  const password = document.querySelector('#password').value

  if (!email || password.length < 8) {
    message.textContent = 'Enter a valid email and a password with at least 8 characters.'
    return
  }

  message.textContent = 'The design is ready! Account registration will work after we connect Supabase.'
})

setMode('signup')
