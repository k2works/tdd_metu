require_relative './app'

Handler = Proc.new do |req, res|
  number = req.query['number'] || '0'

  res.status = 200
  res['Content-Type'] = 'text/text; charset=utf-8'
  command = FibonacciGeneralTerm.new
  result = command.exec(number.to_i)
  res.body = result.to_s
end