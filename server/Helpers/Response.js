class Response {
  static commonSuccess(req, res, status, message, data) {
    return res.status(status).json({ status, success: message, data });
  }

  static commonError(req, res, status, message, data) {
    return res.status(status).json({ status, error: message, data });
  }
}

export default Response;
