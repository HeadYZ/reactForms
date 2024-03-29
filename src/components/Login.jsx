import { useState } from 'react'
import Input from './Input.jsx'

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
				<Input
					label='Email'
					id='email'
					type='email'
					name='email'
					onChange={e => handleInputChange('email', e.target.value)}
					onBlur={() => handleInputBlur('email')}
					value={enteredValues.email}
					error={emailIsInvalid && 'Please enter a valid email adress.'}
				/>

				<Input
					id='password'
					type='password'
					label='Password'
					name='password'
					onChange={e => handleInputChange('password', e.target.value)}
					onBlur={() => handleInputBlur('password')}
					value={enteredValues.password}
					error={passwordIsInvalid && 'Password must be longer than 6 characters.'}
				/>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	)
}
