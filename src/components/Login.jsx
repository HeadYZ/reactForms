import { useState } from 'react'

export default function Login() {
	// const [enteredEmail, setEnteredEmail] = useState('')
	// const [enteredPassword, setEnteredPassword] = useState('')

	const [enteredValues, setEnteredValues] = useState({ email: '', password: '' })

	const [didEdit, setDidEdit] = useState({ email: false, password: false })
	const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@')
	const passwordIsInvalid = didEdit.password && enteredValues.password.length < 6

	function handleSubmit(e) {
		e.preventDefault()
		if (emailIsInvalid || passwordIsInvalid) return
	}

	function handleInputChange(identifier, value) {
		setEnteredValues(prevValues => ({
			...prevValues,
			[identifier]: value,
		}))
		setDidEdit(prevEdit => ({
			...prevEdit,
			[identifier]: false,
		}))
	}

	function handleInputBlur(identifier) {
		setDidEdit(prevEdit => ({
			...prevEdit,
			[identifier]: true,
		}))
	}

	// function handleEmailChange(e) {
	// 	setEnteredEmail(e.target.value)
	// }
	// function handlePasswordChange(e) {
	// 	setEnteredPassword(e.target.value)
	// }

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className='control-row'>
				<div className='control no-margin'>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						name='email'
						onChange={e => handleInputChange('email', e.target.value)}
						onBlur={() => handleInputBlur('email')}
						value={enteredValues.email}
					/>
					<div className='control-error'>{emailIsInvalid && <p>Please enter a valid email adress.</p>}</div>
				</div>

				<div className='control no-margin'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						onChange={e => handleInputChange('password', e.target.value)}
						onBlur={() => handleInputBlur('password')}
						value={enteredValues.password}
					/>
					<div className='control-error'>{passwordIsInvalid && <p>Password must be longer than 6 characters.</p>}</div>
				</div>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	)
}
