import users from '../data/users.js'

export const register = (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'Vui lòng nhập đầy đủ thông tin'
    })
  }

  const existingUser = users.find(
    (user) => user.email === email
  )

  if (existingUser) {
    return res.status(400).json({
      message: 'Email đã được đăng ký'
    })
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password
  }

  users.push(newUser)

  res.status(201).json({
    message: 'Đăng ký thành công',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    }
  })
}

export const login = (req, res) => {
  const { email, password } = req.body

  const user = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  )

  if (!user) {
    return res.status(401).json({
      message: 'Email hoặc mật khẩu không đúng'
    })
  }

  res.json({
    message: 'Đăng nhập thành công',
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  })
}

export const forgotPassword = (req, res) => {

  const { email } = req.body

  if (!email) {

    return res.status(400).json({

      message: 'Vui lòng nhập email'

    })

  }

  const user = users.find(

    (user) => user.email === email

  )

  if (!user) {

    return res.status(404).json({

      message: 'Email chưa được đăng ký'

    })

  }

  res.json({

    message: 'Yêu cầu đặt lại mật khẩu đã được gửi!'

  })

}