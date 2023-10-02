// enum liên quan đến trạng thái
export enum HttpStatus {
  SUCCESS = 200,
  FAILED = 500,
  CREATED = 201,
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
}

// enum liên quan đến message
export enum HttpMessage {
  SUCCESS = 'Thành công',
  FAILED = 'Thất bại',
  CREATED = 'Thêm mới dữ liệu thành công',
  UPDATED = 'Cập nhật dữ liệu thành công',
  DELETED = 'Xóa dữ liệu thành công',
}
