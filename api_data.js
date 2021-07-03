define({ "api": [
  {
    "type": "post",
    "url": "/feedback",
    "title": "Gửi bình luận đánh giá",
    "name": "Gửi_bình_luận_đánh_giá",
    "group": "Bình_luận_đánh_giá",
    "version": "1.0.0",
    "description": "<p>Gửi bình luận đánh giá</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><mark>application/json</mark></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>ID khách hàng</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>ID sản phẩm</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "admin_id",
            "description": "<p>ID quản trị viên</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "parent_id",
            "description": "<p>ID bài viết gốc</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Số sao đánh giá</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "feedback_type",
            "description": "<p>Loại bình luận, đánh giá</p> <ul>     <li><code>1:</code> Đánh giá</li>     <li><code>2:</code> Bình luận</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Nội dung bình luận, đánh giá</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "media",
            "description": "<p>Ảnh, video của bình luận, đánh giá</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body request:",
          "content": "{\n    \"customer_id\": 12,\n    \"product_id\": 22,\n    \"admin_id\": null,\n    \"parent_id\": 0,\n    \"rating\": 5,\n    \"feedback_type\": 1,\n    \"content\": \"Sản phẩm chất lượng\",\n    \"media\": [\n        \"anh_1\",\n        \"anh_2\"\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Gửi bài viết thành công!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi gửi bài viết: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/PhanHoi.py",
    "groupTitle": "Bình_luận_đánh_giá"
  },
  {
    "type": "get",
    "url": "/feedback",
    "title": "Lấy bình luận đánh giá",
    "name": "Lấy_bình_luận_đánh_giá",
    "group": "Bình_luận_đánh_giá",
    "version": "1.0.0",
    "description": "<p>Lấy bình luận đánh giá</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keywork",
            "description": "<p><mark>Từ khóa tìm kiếm</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p><mark>ID nhóm sản phẩm</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "feedback_type",
            "description": "<p><mark>ID nhóm sản phẩm</mark></p> <ul>     <li><code>1:</code> Đánh giá</li>     <li><code>2:</code> Bình luận</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<p><mark>Sắp xếp theo: Mặc định là created_at</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_order",
            "description": "<p><mark>Kiểu sắp xếp: Mặc định desc</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p><mark>Giới hạn số lượng bản ghi</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p><mark>Số phần tử bỏ qua</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "URL request:",
          "content": "https://www.bachhoaxanh.com/api/v1/product?product_id=10&feedback_type=1&sort_by=created_at&sort_order=desc&limit=2&offset=0",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Object.data",
            "description": "<p>Danh sách bình luận, đánh giá</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.id",
            "description": "<p>ID bình luận, đánh giá</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.parent_id",
            "description": "<p>ID bài viết gốc</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.feedback_type",
            "description": "<p>ID bình luận, đánh giá</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Object.data.created_at",
            "description": "<p>Ngày gửi bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.content",
            "description": "<p>Nội dung</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Object.data.media",
            "description": "<p>Danh sách đường dẫn lưu phương tiện của bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.likes",
            "description": "<p>Lượt thích</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.customer",
            "description": "<p>Thông tin khách hàng đã gửi bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.admin",
            "description": "<p>Thông tin quản trị viên đã gửi bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Object.data.child",
            "description": "<p>Danh sách các bình luận, đánh giá con</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Lấy danh sách đánh giá thành công!\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"parent_id\": 0,\n            \"rating\": 5,\n            \"feedback_type\": 1,\n            \"created_at\": \"01/07/2021\",\n            \"content\": \"Sản phẩm chất lượng\",\n            \"media\": [\n                \"anh_1\",\n                \"anh_2\"\n            ],\n            \"likes\": 10,\n            \"customer\": {\n                \"customer_id\": 12,\n                \"customer_name\": \"Quy\"\n            },\n            \"admin\": null,\n            \"child\": null\n        },\n        {\n            \"id\": 2,\n            \"parent_id\": 0,\n            \"rating\": 5,\n            \"feedback_type\": 1,\n            \"created_at\": \"01/07/2021\",\n            \"content\": \"Sản phẩm tốt\",\n            \"media\": [\n                \"anh_3\",\n                \"anh_4\"\n            ],\n            \"likes\": 12,\n            \"customer\": {\n                \"customer_id\": 13,\n                \"customer_name\": \"Hoa\"\n            },\n            \"admin_id\": null,\n            \"child\": null\n        }\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Không thể xử lý yêu cầu.</p> <ul>     <li><code>code:</code> 400</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Không tìm thấy dữ liệu.</p> <ul>     <li><code>code:</code> 404</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Sai định dạng URL!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Không tìm thấy dữ liệu!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi lấy thông tin sản phẩm: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/PhanHoi.py",
    "groupTitle": "Bình_luận_đánh_giá"
  },
  {
    "type": "put",
    "url": "/cart/update-item-quantity",
    "title": "Cập nhật số lượng của một sản phẩm",
    "name": "Cập_nhật_số_lượng",
    "group": "Giỏ_hàng",
    "version": "1.0.0",
    "description": "<p>Khách hàng tăng hoặc giảm bớt số lượng một sản phẩm</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cartproduct_id",
            "description": "<p>id của row table nối giữa giỏ hàng và sản phẩm</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>số lượng sản phẩm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Cách truyền parameter:",
          "content": "https://www.bachhoaxanh.com/api/v1/cart/update-item-quantity?cartproduct_id=1&quantity=5",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Kết quả trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.code",
            "description": "<p>Mã trạng thái HTTP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data",
            "description": "<p>Đối tượng trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.quantity",
            "description": "<p>mua với số lượng</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Cập nhật số lượng thành công!\",\n    \"data\": {\n         \"quantity\": 5\n    } \n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Lỗi Request từ phía Client <ul> <li><code>code:</code> 400</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412-PreconditionFailed",
            "description": "<p>Lỗi kiểm tra điều kiện <ul> <li><code>code:</code> 412</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server <ul> <li><code>code:</code> 500</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Yêu cầu không hợp lệ!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 412:",
          "content": "{\n    \"code\": 412,\n    \"message\": \"Sản phẩm không còn đủ số lượng!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 412:",
          "content": "{\n    \"code\": 412,\n    \"message\": \"Vượt quá số lượng được cho phép mua!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi cập nhật số lượng!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/Giohang.py",
    "groupTitle": "Giỏ_hàng"
  },
  {
    "type": "post",
    "url": "/cart/add-item",
    "title": "Thêm sản phẩm",
    "name": "Thêm_sản_phẩm",
    "group": "Giỏ_hàng",
    "version": "1.0.0",
    "description": "<p>Khách hàng thêm sản phẩm vào giỏ hàng</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cart_id",
            "description": "<p>id giỏ hàng</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>id Sản phẩm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Cách truyền parameter:",
          "content": "https://www.bachhoaxanh.com/api/v1/cart/add-item?cart_id=1&product_id=1",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Kết quả trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.code",
            "description": "<p>Mã trạng thái HTTP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Object.data",
            "description": "<p>Đối tượng trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.cart_items_count",
            "description": "<p>Đếm số sản phẩm trong giỏ hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.cart_total_price",
            "description": "<p>tổng tiền giỏ hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.product",
            "description": "<p>Đối tượng sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.product.product_name",
            "description": "<p>tên sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.product.thumbnail_link",
            "description": "<p>ảnh thumbnail sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.product.cart_product_total_price",
            "description": "<p>tổng tiền sản phẩm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Thêm sản phẩm vào giỏ hàng thành công\",\n    \"data\": {\n        \"cart_items_count\": 1,\n        \"cart_total_price\": 196000,\n        \"product\": [\n           {\n              \"product_name\": \"Thịt ba chỉ bò Úc Pacow khay\",\n              \"thumbnail_link\": \"product1.png\",\n              \"cart_product_total_price\": 196000\n           }\n        ]      \n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Lỗi Request từ phía Client <ul> <li><code>code:</code> 400</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412-PreconditionFailed",
            "description": "<p>Lỗi kiểm tra điều kiện <ul> <li><code>code:</code> 412</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server <ul> <li><code>code:</code> 500</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Yêu cầu không hợp lệ!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 412:",
          "content": "{\n    \"code\": 412,\n    \"message\": \"Hàng đang tạm hết!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Thêm sản phẩm vào giỏ hàng thất bại!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/Giohang.py",
    "groupTitle": "Giỏ_hàng"
  },
  {
    "type": "get",
    "url": "/cart",
    "title": "Xem giỏ hàng",
    "name": "Xem_giỏ_hàng",
    "group": "Giỏ_hàng",
    "version": "1.0.0",
    "description": "<p>Khách hàng vào xem giỏ hàng</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Kết quả trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.code",
            "description": "<p>Mã trạng thái HTTP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Object.data",
            "description": "<p>Đối tượng trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.cart_items_count",
            "description": "<p>đếm số sản phẩm trong giỏ hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.cart_total_price",
            "description": "<p>tổng tiền trong giỏ hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.ship_fee",
            "description": "<p>phí giao hàng dự kiến</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.voucher_count",
            "description": "<p>đếm số lượng voucher</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.product",
            "description": "<p>Đối tượng sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.product.product_id",
            "description": "<p>Sản phẩm id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.product.product_code",
            "description": "<p>mã sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.product.product_name",
            "description": "<p>tên sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.product.quantity",
            "description": "<p>mua với số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.product.price",
            "description": "<p>giá</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.product.cart_product_total_price",
            "description": "<p>tổng tiền sản phẩm trong giỏ hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.product.promotion",
            "description": "<p>Đối tượng khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.product.promotion.promotion_id",
            "description": "<p>id khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.product.promotion.promotion_name",
            "description": "<p>tên khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.product.promotion.content",
            "description": "<p>nội dung khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.customer_voucher",
            "description": "<p>Đối tượng voucher của khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.customer_voucher.id",
            "description": "<p>id đếm số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.customer_voucher.voucher_id",
            "description": "<p>id voucher</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Giỏ hàng load thành công!\",\n    \"data\": {\n       \"cart_items_count\": 2,\n       \"cart_total_price\": 640000,\n       \"ship_fee\": 5000,\n       \"voucher_count\": 5,\n       \"product\": [\n         {\n           \"product_id\": 1,\n           \"product_code\": \"SP001\",\n           \"product_name\": \"Thùng 20 lon bia\",\n           \"thumbnail_link\": \"product1.png\",\n           \"quantity\": 1,\n           \"price\": 280000,\n           \"cart_product_total_price\": 280000,\n           \"promotion\": null\n         },\n         {\n           \"product_id\": 2,\n           \"product_code\": \"SP002\",\n           \"product_name\": \"Thùng 12 gói mì tôm\",\n           \"thumbnail_link\": \"product2.png\",\n           \"quantity\": 2,\n           \"price\": 180000,\n           \"cart_product_total_price\": 360000,\n           \"promotion\": {\n                 \"promotion_id\": 1,\n                 \"promotion_name\": \"Mua 2 tặng 1\",\n                 \"content\": \"Mua 2 thùng 12 gói mì tôm được tặng thêm 1 thùng mì tôm\"\n           }\n         }\n       ],\n         \"customer_voucher\": [\n           {\n               \"id\": 1,\n               \"voucher_id\": 1\n           },\n           {\n               \"id\": 2,\n               \"voucher_id\": 1\n           },\n           {\n               \"id\": 3,\n               \"voucher_id\": 1\n           },\n           {\n               \"id\": 4,\n               \"voucher_id\": 1\n           },\n           {\n               \"id\": 5,\n               \"voucher_id\": 1\n           }\n        ]\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Lỗi Request từ phía Client <ul> <li><code>code:</code> 400</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Lỗi không tìm thấy dữ liệu <ul> <li><code>code:</code> 404</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server <ul> <li><code>code:</code> 500</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Yêu cầu không hợp lệ!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Giỏ hàng không tồn tại!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Lỗi load giỏ hàng!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/Giohang.py",
    "groupTitle": "Giỏ_hàng"
  },
  {
    "type": "delete",
    "url": "/cart/delete-cart",
    "title": "Xóa giỏ hàng",
    "name": "Xóa_giỏ_hàng",
    "group": "Giỏ_hàng",
    "version": "1.0.0",
    "description": "<p>Khách hàng xóa giỏ hàng</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cart_id",
            "description": "<p>Giỏ hàng id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Cách truyền parameter:",
          "content": "https://www.bachhoaxanh.com/api/v1/cart/delete-cart?cart_id=1",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Kết quả trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.code",
            "description": "<p>Mã trạng thái HTTP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.message",
            "description": "<p>Thông báo kết quả</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n   \"code\": 200,\n   \"message\": \"Xóa giỏ hàng thành công!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Lỗi Request từ phía Client <ul> <li><code>code:</code> 400</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Lỗi không tìm thấy dữ liệu <ul> <li><code>code:</code> 404</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server <ul> <li><code>code:</code> 500</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Yêu cầu không hợp lệ!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Giỏ hàng không tồn tại!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xóa giỏ hàng thất bại!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/Giohang.py",
    "groupTitle": "Giỏ_hàng"
  },
  {
    "type": "delete",
    "url": "/cart/delete-item",
    "title": "xóa sản phẩm",
    "name": "Xóa_sản_phẩm",
    "group": "Giỏ_hàng",
    "version": "1.0.0",
    "description": "<p>Khách hàng xóa sản phẩm khỏi giỏ hàng</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cartproduct_id",
            "description": "<p>id của row table nối giữa giỏ hàng và sản phẩm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Cách truyền parameter:",
          "content": "https://www.bachhoaxanh.com/api/v1/cart/delete-item?cartproduct_id=1",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark><br></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": " {\n     \"code\": 200,\n     \"message\": \"Xóa sản phẩm thành công!\",\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Lỗi Request từ phía Client <ul> <li><code>code:</code> 400</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server <ul> <li><code>code:</code> 500</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Yêu cầu không hợp lệ!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xóa sản phẩm thất bại!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/Giohang.py",
    "groupTitle": "Giỏ_hàng"
  },
  {
    "type": "get",
    "url": "/promotion",
    "title": "Lấy số lượng hàng đang khuyến mãi",
    "name": "Số_lượng_khuyến_mãi",
    "group": "Khuyến_mãi",
    "version": "1.0.0",
    "description": "<p>Lấy số lượng sản phẩm đang được khuyến mãi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sum_of",
            "description": "<p><mark>Loại đối tượng cần tính số lượng khuyến mãi</mark></p> <ul>     <li><code>product:</code> Sản phẩm</li>     <li><code>product_group:</code> Nhóm sản phẩm</li>     <li><code>brand:</code> Thương hiệu</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "URL request:",
          "content": "https://www.bachhoaxanh.com/api/v1/promotion?sum_of=product",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>Tổng số sản phẩm đang được khuyễn mãi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Lấy số lượng hàng khuyến mãi thành công!\",\n    \"data\": 1234\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Không thể xử lý yêu cầu.</p> <ul>     <li><code>code:</code> 400</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Không tìm thấy dữ liệu.</p> <ul>     <li><code>code:</code> 404</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Sai định dạng URL!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Không tìm thấy dữ liệu!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi lấy số lượng hàng đang khuyễn mãi: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/KhuyenMai.py",
    "groupTitle": "Khuyến_mãi"
  },
  {
    "type": "put",
    "url": "/customer-update-info",
    "title": "Cập nhật thông tin",
    "name": "Cập_nhật_thông_tin",
    "group": "Khách_hàng",
    "version": "1.0.0",
    "description": "<p>Khách hàng cập nhật thông tin tài khoản</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><mark>application/json</mark></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer</code> <mark>Chuỗi Token</mark></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID khách hàng</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "customer_code",
            "description": "<p>Mã khách hàng</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "customer_name",
            "description": "<p>Tên khách hàng</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "customer_phone",
            "description": "<p>Số điện thoại</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "customer_address",
            "description": "<p>Địa chỉ khách hàng</p>"
          },
          {
            "group": "Body",
            "type": "Date",
            "optional": false,
            "field": "date_birth",
            "description": "<p>Ngày sinh</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "avatar_link",
            "description": "<p>Đường dẫn lưu ảnh đại diện</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Địa chỉ thư điện tử</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>Giới tính khách hàng</p> <ul>     <li><code>0:</code> Nữ</li>     <li><code>1:</code> Nam</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "guardian_name",
            "description": "<p>Tên người giám hộ</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "indentity_id",
            "description": "<p>Số chứng minh thư, căn cước, hộ chiếu</p>"
          },
          {
            "group": "Body",
            "type": "Date",
            "optional": false,
            "field": "certify_date",
            "description": "<p>Ngày cấp CMT, CCCD, HC</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "certify_place",
            "description": "<p>Nơi cấp CMT, CCCD, HC</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>ID tỉnh/thành phố</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "district_id",
            "description": "<p>ID quận/huyện</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "block_id",
            "description": "<p>ID xã/phường</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body request:",
          "content": "{\n    \"id\": 1,\n    \"customer_code\": \"A0000001\",\n    \"customer_name\": \"Phạm Tiến Mạnh\",\n    \"customer_phone\": \"0123456789\",\n    \"customer_address\": \"Số 11, ngõ 11 đường Cầu Diễn, Phường Minh Khai, Quận Bắc Từ Liêm, Hà Nội\",\n    \"date_birth\": \"31/12/1992\",\n    \"avatar_link\": \"avatar.jpg\",\n    \"email\": \"asdasdasf@gmail.com\",\n    \"gender\": 1,\n    \"guardian_name\": null,\n    \"indentity_id\": \"HC000001VN\",\n    \"certify_date\": \"10/10/2010\",\n    \"certify_place\": \"Hải Dương\",\n    \"province_id\": 4,\n    \"district_id\": 5,\n    \"block_id\": 6\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Thông tin khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.customer_code",
            "description": "<p>Mã khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.customer_name",
            "description": "<p>Tên khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.customer_phone",
            "description": "<p>Số điện thoại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.customer_address",
            "description": "<p>Địa chỉ khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.date_birth",
            "description": "<p>Ngày sinh</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.avatar_link",
            "description": "<p>Đường dẫn lưu ảnh đại diện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>Địa chỉ thư điện tử</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.gender",
            "description": "<p>Giới tính khách hàng</p> <ul>     <li><code>0:</code> Nữ</li>     <li><code>1:</code> Nam</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.guardian_name",
            "description": "<p>Tên người giám hộ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.indentity_id",
            "description": "<p>Số chứng minh thư, căn cước, hộ chiếu</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.certify_date",
            "description": "<p>Ngày cấp CMT, CCCD, HC</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.certify_place",
            "description": "<p>Nơi cấp CMT, CCCD, HC</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.province_id",
            "description": "<p>ID tỉnh/thành phố</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.district_id",
            "description": "<p>ID quận/huyện</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.block_id",
            "description": "<p>ID xã/phường</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Cập nhật thông tin thành công!\",\n    \"data\": {\n        \"id\": 1,\n        \"customer_code\": \"A0000001\",\n        \"customer_name\": \"Phạm Tiến Mạnh\",\n        \"customer_phone\": \"0123456789\",\n        \"customer_address\": \"Số 11, ngõ 11 đường Cầu Diễn, Phường Minh Khai, Quận Bắc Từ Liêm, Hà Nội\",\n        \"date_birth\": \"31/12/1992\",\n        \"avatar_link\": \"avatar.jpg\",\n        \"email\": \"asdasdasf@gmail.com\",\n        \"gender\": 1,\n        \"guardian_name\": null,\n        \"indentity_id\": \"HC000001VN\",\n        \"certify_date\": \"10/10/2010\",\n        \"certify_place\": \"Hải Dương\",\n        \"province_id\": 4,\n        \"district_id\": 5,\n        \"block_id\": 6\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401-Unauthorized",
            "description": "<p>Token hết hạn hoặc không hợp lệ.</p> <ul>     <li><code>code:</code> 401</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 401:",
          "content": "{\n    \"code\": 401,\n    \"message\": \"Token hết hạn hoặc không hợp lệ. Vui lòng đăng nhập lại!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi cập nhật thông tin: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/KhachHang.py",
    "groupTitle": "Khách_hàng"
  },
  {
    "type": "get",
    "url": "/customer/<id>/history-search",
    "title": "Lịch sử tìm kiếm",
    "name": "Lịch_sử_tìm_kiếm",
    "group": "Khách_hàng",
    "version": "1.0.0",
    "description": "<p>Lấy danh sách từ khóa khách hàng đã tìm kiếm</p>",
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p><mark>ID khách hàng</mark></p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<p><mark>Sắp xếp theo: Mặc định là id</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_order",
            "description": "<p><mark>Kiểu sắp xếp: Mặc định asc</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p><mark>Giới hạn số lượng bản ghi</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "URL request:",
          "content": "https://www.bachhoaxanh.com/api/v1/customer/<id>/history-search?sort_by=id&sort_order=asc&limit=4",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Danh sách thông tin chuỗi tìm kiếm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID chuỗi tìm kiếm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.search_string",
            "description": "<p>Chuỗi tìm kiếm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.search_number",
            "description": "<p>Số lần tìm kiếm</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.searched_at",
            "description": "<p>Thời điểm tìm kiếm gần nhất</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Lấy thông tin sản phẩm thành công!\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"search_string\": \"thit ga\",\n            \"search_number\": 10,\n            \"searched_at\": \"01/06/2021\"\n        },\n        {\n            \"id\": 2,\n            \"search_string\": \"trung\",\n            \"search_number\": 30,\n            \"searched_at\": \"01/06/2021\"\n        },\n        {\n            \"id\": 3,\n            \"search_string\": \"pepsi\",\n            \"search_number\": 15,\n            \"searched_at\": \"01/06/2021\"\n        },\n        {\n            \"id\": 1,\n            \"search_string\": \"banh keo\",\n            \"search_number\": 10,\n            \"searched_at\": \"01/06/2021\"\n        }\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Không thể xử lý yêu cầu.</p> <ul>     <li><code>code:</code> 400</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Không tìm thấy dữ liệu.</p> <ul>     <li><code>code:</code> 404</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Sai định dạng URL!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Không tìm thấy dữ liệu!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi lấy lịch sử tìm kiếm: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/KhachHang.py",
    "groupTitle": "Khách_hàng"
  },
  {
    "type": "post",
    "url": "/customer-register",
    "title": "Đăng ký",
    "name": "Đăng_ký",
    "group": "Khách_hàng",
    "version": "1.0.0",
    "description": "<p>Khách hàng đăng ký tài khoản</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><mark>application/json</mark></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "customer_name",
            "description": "<p>Tên khách hàng</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>Giới tính khách hàng</p> <ul>     <li><code>0:</code> Nữ</li>     <li><code>1:</code> Nam</li> </ul>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mật khẩu</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Địa chỉ khách hàng</p>"
          },
          {
            "group": "Body",
            "type": "Date",
            "optional": true,
            "field": "date_birth",
            "description": "<p>Ngày sinh</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Địa chỉ thư điện tử</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "avatar_link",
            "description": "<p>Đường dẫn lưu ảnh đại diện</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "guardian_name",
            "description": "<p>Tên người giám hộ</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "indentity_id",
            "description": "<p>Số chứng minh thư, căn cước, hộ chiếu</p>"
          },
          {
            "group": "Body",
            "type": "Date",
            "optional": true,
            "field": "certify_date",
            "description": "<p>Ngày cấp CMT, CCCD, HC</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "certify_place",
            "description": "<p>Nơi cấp CMT, CCCD, HC</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "province_id",
            "description": "<p>ID tỉnh/thành phố</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "district_id",
            "description": "<p>ID quận/huyện</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "block_id",
            "description": "<p>ID xã/phường</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body request:",
          "content": "{\n    \"customer_name\": \"Tiến Mạnh\",\n    \"gender\": 1,\n    \"phone\": \"0123456789\",\n    \"password\": \"a1b2c3A@\",\n    \"address\": \"Số 9, ngõ 11 đường Cầu Diễn, Phường Minh Khai, Quận Bắc Từ Liêm, Hà Nội\",\n    \"date_birth\": \"31/12/1992\",\n    \"email\": \"asdasdasf@gmail.com\",\n    \"avatar_link\": \"avatar.jpg\",\n    \"guardian_name\": null,\n    \"indentity_id\": \"HC000001VN\",\n    \"certify_date\": \"12/12/2009\",\n    \"certify_place\": \"Hải Dương\",\n    \"province_id\": 1,\n    \"district_id\": 2,\n    \"block_id\": 3\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Đăng ký tài khoản thành công!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412-PreconditionFailed",
            "description": "<p>Lỗi kiểm tra điều kiện</p> <ul>     <li><code>code:</code> 412</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 412:",
          "content": "{\n    \"code\": 412,\n    \"message\": \"Tài khoản đã tồn tại!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi đăng ký: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/KhachHang.py",
    "groupTitle": "Khách_hàng"
  },
  {
    "type": "post",
    "url": "/customer-login",
    "title": "Đăng nhập",
    "name": "Đăng_nhập",
    "group": "Khách_hàng",
    "version": "1.0.0",
    "description": "<p>Khách hàng đăng nhập vào hệ thống</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><mark>application/json</mark></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Số điện thoại khách hàng</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mật khẩu đăng nhập</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body request:",
          "content": "{\n    \"phone\": \"0123456789\",\n    \"password\": \"a1b2c3A@\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Thông tin của khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.customer_code",
            "description": "<p>Mã khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.customer_name",
            "description": "<p>Tên khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.gender",
            "description": "<p>Giới tính khách hàng</p> <ul>     <li><code>0:</code> Nữ</li>     <li><code>1:</code> Nam</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.customer_phone",
            "description": "<p>Số điện thoại</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.customer_address",
            "description": "<p>Địa chỉ khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.date_birth",
            "description": "<p>Ngày sinh</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.avatar_link",
            "description": "<p>Đường dẫn lưu ảnh đại diện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>Địa chỉ thư điện tử</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.guardian_name",
            "description": "<p>Tên người giám hộ</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.indentity_id",
            "description": "<p>Số chứng minh thư, căn cước, hộ chiếu</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.certify_date",
            "description": "<p>Ngày cấp CMT, CCCD, HC</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.certify_place",
            "description": "<p>Nơi cấp CMT, CCCD, HC</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.province_id",
            "description": "<p>ID tỉnh/thành phố</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.district_id",
            "description": "<p>ID quận/huyện</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.block_id",
            "description": "<p>ID xã/phường</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mesage",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Chuỗi Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Đăng nhập thành công!\",\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n    \"data\": {\n        \"id\": 1,\n        \"customer_code\": \"A0000001\",\n        \"customer_name\": \"Tiến Mạnh\",\n        \"gender\": 1,\n        \"customer_phone\": \"0123456789\",\n        \"customer_address\": \"Số 9, ngõ 11 đường Cầu Diễn, Phường Minh Khai, Quận Bắc Từ Liêm, Hà Nội\",\n        \"date_birth\": \"31/12/1992\",\n        \"email\": \"asdasdasf@gmail.com\",\n        \"avatar_link\": \"avatar.jpg\",\n        \"guardian_name\": null,\n        \"indentity_id\": \"HC000001VN\",\n        \"certify_date\": \"12/12/2009\",\n        \"certify_place\": \"Hải Dương\",\n        \"province_id\": 1,\n        \"district_id\": 2,\n        \"block_id\": 3\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403-Forbidden",
            "description": "<p>Truy cập dữ liệu bị từ chối</p> <ul>     <li><code>code:</code> 403</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Lỗi truy cập dữ liệu không tồn tại</p> <ul>     <li><code>code:</code> 404</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412-PreconditionFailed",
            "description": "<p>Lỗi khi kiểm tra dữ liệu</p> <ul>     <li><code>code:</code> 412</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 403:",
          "content": "{\n    \"code\": 403,\n    \"message\": \"Tài khoản đang bị khóa!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Tài khoản không tồn tại!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 412:",
          "content": "{\n    \"code\": 412,\n    \"message\": \"Mật khẩu không đúng!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi đăng nhập: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/KhachHang.py",
    "groupTitle": "Khách_hàng"
  },
  {
    "type": "put",
    "url": "/customer-change-password",
    "title": "Đổi mật khẩu",
    "name": "Đổi_mật_khẩu",
    "group": "Khách_hàng",
    "version": "1.0.0",
    "description": "<p>Khách hàng thay đổi mật khẩu</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><mark>application/json</mark></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer</code> <mark>Chuỗi Token</mark></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID khách hàng</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "customer_code",
            "description": "<p>Mã khách hàng</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "customer_phone",
            "description": "<p>Số điện thoại</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mật khẩu hiện tại</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>Mật khẩu mới</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body request:",
          "content": "{\n    \"id\": 1,\n    \"customer_code\": \"A0000001\",\n    \"customer_phone\": \"0123456789\",\n    \"password\": \"a1b2c3A@\",\n    \"new_password\": \"9m8n7b#\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Đổi mật khẩu thành công. Vui lòng đăng nhập lại!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401-Unauthorized",
            "description": "<p>Token hết hạn hoặc không hợp lệ.</p> <ul>     <li><code>code:</code> 401</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "412-PreconditionFailed",
            "description": "<p>Lỗi kiểm tra điều kiện</p> <ul>     <li><code>code:</code> 412</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 401:",
          "content": "{\n    \"code\": 401,\n    \"message\": \"Token hết hạn hoặc không hợp lệ. Vui lòng đăng nhập lại!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 412:",
          "content": "{\n    \"code\": 412,\n    \"message\": \"Mật khẩu hiện tại không đúng!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi đổi mật khẩu: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/KhachHang.py",
    "groupTitle": "Khách_hàng"
  },
  {
    "type": "get",
    "url": "/articles/view-article",
    "title": "Xem bài viết",
    "name": "Xem_bài_viết",
    "group": "Mẹo_vặt",
    "version": "1.0.0",
    "description": "<p>Khách hàng vào xem bài viết</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "article_id",
            "description": "<p>id bài viết</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Cách truyền parameter:",
          "content": "https://www.bachhoaxanh.com/api/v1/articles/view-article?article_id=1",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Kết quả trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.code",
            "description": "<p>Mã trạng thái HTTP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Object.data",
            "description": "<p>Đối tượng trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.article_name",
            "description": "<p>tên bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.title",
            "description": "<p>tiêu đề bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.content_html",
            "description": "<p>nội dung bài viết với định dạng html</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.created_at",
            "description": "<p>ngày tạo bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.updated_at",
            "description": "<p>ngày sửa bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.tag",
            "description": "<p>Đối tượng tag bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.same_tag_suggestion",
            "description": "<p>Đối tượng gợi ý cùng tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.similar_tag_suggestion",
            "description": "<p>Đối tượng gợi ý giống tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.tag_id",
            "description": "<p>id tag bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.tag_name",
            "description": "<p>tên tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.thumbnail_link",
            "description": "<p>ảnh đại diện bài viết</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Load bài viết thành công!\",\n    \"data\": {\n         \"article_name\": \"Nấm mối là nấm gì mà giá 1 triệu/kg vẫn có người sẵn sàng mua?\",\n         \"title\": \"Nấm mối là nguyên liệu không thể thiếu trong các món ăn ngon...\",\n         \"content_html\": \"<html>...</html>\",\n         \"created_at\": \"2/7/2021\",\n         \"updated_at\": \"3/7/2021\",\n         \"tag\": [\n              {  \n                  \"tag_id\": 1,\n                  \"tag_name\": \"nấm\"\n              },\n              {  \n                  \"tag_id\": 2,\n                  \"tag_name\": \"nấm mối\"\n              },\n              {  \n                  \"tag_id\": 3,\n                  \"tag_name\": \"các món ngon từ nấm\"\n              }\n         ],\n         \"similar_tag_suggestion\": [\n              {  \n                   \"tag_id\": 1,\n                   \"article_name\": \"Cách phân biệt nấm ăn được và nấm độc\"\n              },\n              {  \n                   \"tag_id\": 3,\n                   \"article_name\": \"Đi mua nấm nên chú ý điều này!\"\n              }\n         ],\n         \"same_tag_suggestion\": [\n               {\n                   \"tag_id\": 2,\n                   \"article_name\": \"Cách làm nấm mối xào ngon nhất\",\n                   \"thumbnail_link\": \"article1.png\"\n               },\n               {\n                   \"tag_id\": 2,\n                   \"article_name\": \"Cách sơ chế nấm mối\",\n                   \"thumbnail_link\": \"article2.png\"\n               },\n               {\n                   \"tag_id\": 2,\n                   \"article_name\": \"Cách làm nấm mối hấp ngon, bổ, rẻ\",\n                   \"thumbnail_link\": \"article3.png\"\n               }\n         ]   \n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Lỗi Request từ phía Client <ul> <li><code>code:</code> 400</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server <ul> <li><code>code:</code> 500</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Yêu cầu không hợp lệ!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Lỗi load bài viết!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/Meovat.py",
    "groupTitle": "Mẹo_vặt"
  },
  {
    "type": "get",
    "url": "/articles",
    "title": "Xem danh sách bài viết, mẹo vặt",
    "name": "Xem_danh_sách_bài_viết",
    "group": "Mẹo_vặt",
    "version": "1.0.0",
    "description": "<p>Hiển thị danh sách các bài viết và mẹo vặt</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Object.article_group_id",
            "description": "<p>giới hạn số lượng items mà trang được phép load</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Object.limit",
            "description": "<p>giới hạn số lượng items mà trang được phép load</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Object.offset",
            "description": "<p>vị trí bắt đầu load trang</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Object.article",
            "description": "<p>Đối tượng bài viết</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.article.created_at",
            "description": "<p>ngày tạo bài viết</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Cách truyền parameter (giới hạn load 10 item):",
          "content": "https://www.bachhoaxanh.com/api/v1/articles?article_group_id=1&sort_by=created_at&limit=10",
          "type": "JSON"
        },
        {
          "title": "Parameter khi load 10 item tiếp theo:",
          "content": "https://www.bachhoaxanh.com/api/v1/articles?article_group_id=1&sort_by=created_at&limit=10&offset=10",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Kết quả trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.code",
            "description": "<p>Mã trạng thái HTTP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Object.data",
            "description": "<p>Đối tượng trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.aritcle_group",
            "description": "<p>Đối tượng nhóm bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.aritcle_group.group_name",
            "description": "<p>tên nhóm bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.aritcle_group.article",
            "description": "<p>Đối tượng bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.aritcle_group.article.article_name",
            "description": "<p>tên bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.aritcle_group.article.title",
            "description": "<p>tiêu đề bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.aritcle_group.article.thumbnail_link",
            "description": "<p>ảnh đại diện bài viết</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.aritcle_group.article.views_count",
            "description": "<p>Đếm số lượt xem</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.aritcle_group.article.comments_count",
            "description": "<p>Đếm số lượt comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Load danh sách bài viết thành công!\",\n    \"data\": {\n         \"article_group\": [\n                {\n                    \"group_name\": \"Mẹo hay mới\",\n                    \"article\": [\n                          {\n                              \"article_name\": \"Vì sao lấy mẫu xét nghiệm Covid lúc nào cũng lấy nhóm 10 hoặc 15 người?\",\n                              \"title\": \"Nhiều người khi đi xét nghiệm luôn thắc mắc câu hỏi vì sao...\",\n                              \"thumbnail_link\": \"article1.png\",\n                              \"views_count\": 450,\n                              \"comments_count\": 0\n                          },\n                          {\n                              \"article_name\": \"Nấm mối là nấm gì mà giá 1 triệu/kg vẫn có người sẵn sàng mua?\",\n                              \"title\": \"Nấm mối là nguyên liệu không thể thiếu trong các món ăn ngon, hấp dẫn...\",\n                              \"thumbnail_link\": \"article2.png\",\n                              \"views_count\": 550,\n                              \"comments_count\": 1\n                          }\n                    ]\n                },\n                {\n                    \"group_name\": \"Bạn đọc chia sẻ\",\n                    \"article\": [\n                          {\n                              \"article_name\": \"Chàng sinh viên chia sẻ cách làm trắng răng đơn giản bằng nguyên liệu nhà nào cũng có\",\n                              \"title\": \"Làm trắng răng tại nhà vô cùng đơn giản chỉ bằng những nguyên liệu tự nhiên...\",\n                              \"thumbnail_link\": \"article3.png\",\n                              \"views_count\": 650,\n                              \"comments_count\": 1\n                          }\n                    ]\n                }\n         ]\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Lỗi Request từ phía Client <ul> <li><code>code:</code> 400</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server <ul> <li><code>code:</code> 500</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Yêu cầu không hợp lệ!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Lỗi load danh sách bài viết!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/Meovat.py",
    "groupTitle": "Mẹo_vặt"
  },
  {
    "type": "get",
    "url": "/ads",
    "title": "Lấy quảng cáo",
    "name": "Lấy_quảng_cáo",
    "group": "Quảng_cáo",
    "version": "1.0.0",
    "description": "<p>Quảng cáo</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "product_group_id",
            "description": "<p><mark>ID nhóm sản phẩm</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "brand_id",
            "description": "<p><mark>ID thương hiệu</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "product_id",
            "description": "<p><mark>ID sản phẩm</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sector_id",
            "description": "<p><mark>ID khu vực</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "campaign_id",
            "description": "<p><mark>ID khu vực</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p><mark>Vị trí đặt quảng cáo trong website</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "URL request:",
          "content": "https://www.bachhoaxanh.com/api/v1/ads?campaign_id=1&position=banner",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Thông tin quảng cáo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID quảng cáo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.code",
            "description": "<p>Mã quảng cáo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Tên quảng cáo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.position",
            "description": "<p>Vị trí đặt quảng cáo</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.media",
            "description": "<p>Danh sách phương tiện cho quảng cáo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.media.media_link",
            "description": "<p>Đường dẫn đến phương tiện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.media.page_link",
            "description": "<p>Đường dẫn khi click vào phương tiện</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Lấy quảng cáo thành công!\",\n    \"data\": {\n        \"id\": 1,\n        \"code\": \"BANNER0001\",\n        \"name\": \"Quảng cáo banner 1\",\n        \"position\": \"banner\",\n        \"media\": [\n            {\n                \"media_link\": \"image1.jpg\",\n                \"page_link\": \"page_link1\"\n            },\n            {\n                \"media_link\": \"image2.jpg\",\n                \"page_link\": \"page_link2\"\n            },\n            {\n                \"media_link\": \"image3.jpg\",\n                \"page_link\": \"page_link3\"\n            }\n        ]\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Không thể xử lý yêu cầu.</p> <ul>     <li><code>code:</code> 400</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Không tìm thấy dữ liệu.</p> <ul>     <li><code>code:</code> 416</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Sai định dạng URL!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Không tìm thấy dữ liệu!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi lấy quảng cáo: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/QuangCao.py",
    "groupTitle": "Quảng_cáo"
  },
  {
    "type": "get",
    "url": "/product-group-menu",
    "title": "Lấy danh mục sản phẩm",
    "name": "Lấy_danh_mục_sản_phẩm",
    "group": "Sản_phẩm",
    "version": "1.0.0",
    "description": "<p>Lấy danh mục sản phẩm để hiển thị menu</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "promotion_id",
            "description": "<p><mark>ID khuyến mãi</mark></p> <ul>     <li><code>0:</code> Lấy danh mục không có khuyến mãi</li>     <li><code>-1:</code> Lấy tất cả danh mục đang khuyến mãi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "URL request:",
          "content": "https://www.bachhoaxanh.com/api/v1/product-group-menu",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Danh sách thông tin nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.parent_id",
            "description": "<p>ID nhóm sản phẩm cha</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.code",
            "description": "<p>Mã nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Tên nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.icon_link",
            "description": "<p>Đường dẫn icon nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content_html",
            "description": "<p>Nội dung mô tả nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>Cấp nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.new",
            "description": "<p>Nhóm sản phẩm mới</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.hot",
            "description": "<p>Nhóm sản phẩm hot</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.quantity_product_promotion",
            "description": "<p>Số lượng sản phẩm khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.child",
            "description": "<p>Danh sách thông tin nhóm sản phẩm con</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.child.id",
            "description": "<p>ID nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.child.parent_id",
            "description": "<p>ID nhóm sản phẩm cha</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.child.code",
            "description": "<p>Mã nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.child.name",
            "description": "<p>Tên nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.child.icon_link",
            "description": "<p>Đường dẫn icon nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.child.content_html",
            "description": "<p>Nội dung mô tả nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.child.level",
            "description": "<p>Cấp nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.child.new",
            "description": "<p>Nhóm sản phẩm mới</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.child.hot",
            "description": "<p>Nhóm sản phẩm hot</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.child.quantity_product_promotion",
            "description": "<p>Số lượng sản phẩm khuyến mãi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Lấy danh mục phẩm thành công!\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"parent_id\": 0,\n            \"code\": \"NSP0001\",\n            \"name\": \"Thịt, cá, trúng, rau\",\n            \"icon_link\": \"icon1.png\",\n            \"content_html\": \"ádasdasdasdasd\",\n            \"level\": 1,\n            \"new\": 1,\n            \"hot\": 1,\n            \"quantity_product_promotion\": null,\n            \"child\": [\n                {\n                    \"id\": 2,\n                    \"parent_id\": 1,\n                    \"code\": \"NSP0002\",\n                    \"name\": \"Trái cây tươi ngon\",\n                    \"icon_link\": \"icon2.png\",\n                    \"content_html\": \"ádasdasdasdasd\",\n                    \"level\": 2,\n                    \"new\": 0,\n                    \"hot\": 1,\n                    \"quantity_product_promotion\": null,\n                },\n                {\n                    \"id\": 5,\n                    \"parent_id\": 1,\n                    \"code\": \"NSP0005\",\n                    \"name\": \"Thực phẩm sơ chế\",\n                    \"icon_link\": \"icon5.png\",\n                    \"content_html\": \"ádasdasdasdasd\",\n                    \"level\": 2,\n                    \"new\": 0,\n                    \"hot\": 0,\n                    \"quantity_product_promotion\": null,\n                }\n            ]\n        },\n        {\n            \"id\": 3,\n            \"parent_id\": 0,\n            \"code\": \"NSP0003\",\n            \"name\": \"Đồ uống các loại\",\n            \"icon_link\": \"icon3.png\",\n            \"content_html\": \"ádasdasdasdasd\",\n            \"level\": 1,\n            \"new\": 0,\n            \"hot\": 0,\n            \"quantity_product_promotion\": null,\n            \"child\": [\n                {\n                    \"id\": 4,\n                    \"parent_id\": 3,\n                    \"code\": \"NSP0004\",\n                    \"name\": \"Nước ngọt nước trà\",\n                    \"icon_link\": \"icon4.png\",\n                    \"content_html\": \"ádasdasdasdasd\",\n                    \"level\": 2,\n                    \"new\": 0,\n                    \"hot\": 0,\n                    \"quantity_product_promotion\": null,\n                }\n            ]\n        }\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Không thể xử lý yêu cầu.</p> <ul>     <li><code>code:</code> 400</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Không tìm thấy dữ liệu.</p> <ul>     <li><code>code:</code> 416</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Sai định dạng URL!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Không tìm thấy dữ liệu!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi lấy danh mục sản phẩm: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/SanPham.py",
    "groupTitle": "Sản_phẩm"
  },
  {
    "type": "get",
    "url": "/product-group",
    "title": "Lấy danh sách nhóm sản phẩm",
    "name": "Lấy_danh_sách_nhóm_sản_phẩm",
    "group": "Sản_phẩm",
    "version": "1.0.0",
    "description": "<p>Lấy danh sách nhóm sản phẩm</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "keyword",
            "description": "<p><mark>Từ khóa tìm kiếm</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "parent_id",
            "description": "<p><mark>ID nhóm sản phẩm cha</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "hot",
            "description": "<p><mark>Nhóm sản phẩm hot</mark></p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "new",
            "description": "<p><mark>Nhóm sản phẩm mới</mark></p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "promotion_id",
            "description": "<p><mark>ID khuyến mãi</mark></p> <ul>     <li><code>0:</code> Lấy nhóm sản phẩm không có khuyến mãi</li>     <li><code>-1:</code> Lấy tất cả nhóm sản phẩm đang khuyến mãi</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<p><mark>Sắp xếp theo: Mặc định là id</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_order",
            "description": "<p><mark>Kiểu sắp xếp: Mặc định asc</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p><mark>Giới hạn số lượng bản ghi</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p><mark>Số phần tử bỏ qua</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "URL request:",
          "content": "https://www.bachhoaxanh.com/api/v1/product-group?hot=1&sort_by=id&sort_order=asc&limit=10",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Danh sách thông tin nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.parent_id",
            "description": "<p>ID nhóm sản phẩm cha</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.code",
            "description": "<p>Mã nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Tên nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.icon_link",
            "description": "<p>Đường dẫn icon nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content_html",
            "description": "<p>Nội dung mô tả nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>Cấp nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.new",
            "description": "<p>Nhóm sản phẩm mới</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.hot",
            "description": "<p>Nhóm sản phẩm hot</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Lấy danh sách nhóm sản phẩm thành công!\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"parent_id\": null,\n            \"code\": \"NSP0001\",\n            \"name\": \"Thịt, cá, trúng, rau\",\n            \"icon_link\": \"icon1.png\",\n            \"content_html\": \"ádasdasdasdasd\",\n            \"level\": 1,\n            \"new\": 1,\n            \"hot\": 1\n        },\n        {\n            \"id\": 2,\n            \"parent_id\": 1,\n            \"code\": \"NSP0002\",\n            \"name\": \"Trái cây tươi ngon\",\n            \"icon_link\": \"icon2.png\",\n            \"content_html\": \"ádasdasdasdasd\",\n            \"level\": 2,\n            \"new\": 0,\n            \"hot\": 1\n        },\n        {\n            \"id\": 5,\n            \"parent_id\": 1,\n            \"code\": \"NSP0005\",\n            \"name\": \"Thực phẩm sơ chế\",\n            \"icon_link\": \"icon5.png\",\n            \"content_html\": \"ádasdasdasdasd\",\n            \"level\": 2,\n            \"new\": 0,\n            \"hot\": 1\n        },\n        {\n            \"id\": 3,\n            \"parent_id\": null,\n            \"code\": \"NSP0003\",\n            \"name\": \"Đồ uống các loại\",\n            \"icon_link\": \"icon3.png\",\n            \"content_html\": \"ádasdasdasdasd\",\n            \"level\": 1,\n            \"new\": 0,\n            \"hot\": 1\n        },\n        {\n            \"id\": 4,\n            \"parent_id\": 3,\n            \"code\": \"NSP0004\",\n            \"name\": \"Nước ngọt nước trà\",\n            \"icon_link\": \"icon4.png\",\n            \"content_html\": \"ádasdasdasdasd\",\n            \"level\": 2,\n            \"new\": 0,\n            \"hot\": 0\n        }\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Không thể xử lý yêu cầu.</p> <ul>     <li><code>code:</code> 400</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Không tìm thấy dữ liệu.</p> <ul>     <li><code>code:</code> 404</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Sai định dạng URL!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Không tìm thấy dữ liệu!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi lấy danh sách nhóm sản phẩm: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/SanPham.py",
    "groupTitle": "Sản_phẩm"
  },
  {
    "type": "get",
    "url": "/product",
    "title": "Lấy danh sách sản phẩm",
    "name": "Lấy_danh_sách_sản_phẩm",
    "group": "Sản_phẩm",
    "version": "1.0.0",
    "description": "<p>Lấy danh sách sản phẩm</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keywork",
            "description": "<p><mark>Từ khóa tìm kiếm</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "product_group_id",
            "description": "<p><mark>ID nhóm sản phẩm</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "brand_id",
            "description": "<p><mark>ID thương hiệu</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "tag_id",
            "description": "<p><mark>ID tag</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "hot",
            "description": "<p><mark>Sản phẩm hot</mark></p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "new",
            "description": "<p><mark>Sản phẩm mới</mark></p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "promotion_id",
            "description": "<p><mark>ID khuyến mãi</mark></p> <ul>     <li><code>0:</code> Lấy sản phẩm không có khuyến mãi</li>     <li><code>-1:</code> Lấy tất cả sản phẩm đang khuyến mãi</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<p><mark>Sắp xếp theo: Mặc định là id</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_order",
            "description": "<p><mark>Kiểu sắp xếp: Mặc định asc</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p><mark>Giới hạn số lượng bản ghi</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p><mark>Số phần tử bỏ qua</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "URL request:",
          "content": "https://www.bachhoaxanh.com/api/v1/product?product_group_id=10&brand_id=9&sort_by=id&sort_order=asc&limit=4&offset=0",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Danh sách thông tin sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.product_code",
            "description": "<p>Mã sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.product_name",
            "description": "<p>Tên sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.thumbnail_link",
            "description": "<p>Ảnh đại diện sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.price",
            "description": "<p>Giá gốc của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.unit",
            "description": "<p>Đơn vị của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.unit_child",
            "description": "<p>Đơn vị con của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.quantity",
            "description": "<p>Số lượng của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.quantity_child",
            "description": "<p>Số lượng con trong sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.expired_at",
            "description": "<p>Ngày hết hạn</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.guarantee",
            "description": "<p>Bảo hành</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.quantity_sold",
            "description": "<p>Số lượng đã bán</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.views",
            "description": "<p>Số lượt xem</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.max_buy_number",
            "description": "<p>Số lượng mua tối đa</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.sale_price",
            "description": "<p>Giá bán khuyễn mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.sale_percent",
            "description": "<p>Phần trăm khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.new",
            "description": "<p>Sản phẩm mới</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.hot",
            "description": "<p>Sản phẩm hot</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.special",
            "description": "<p>Sản phẩm đặc biệt</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "data.promotion",
            "description": "<p>Thông tin khuyến mãi của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.promotion.id",
            "description": "<p>ID khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.promotion.promotion_code",
            "description": "<p>Mã khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.promotion.promotion_name",
            "description": "<p>Tên khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.promotion.content",
            "description": "<p>Nội dung khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.promotion.image_link",
            "description": "<p>Ảnh khuyến mãi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Lấy danh sách sản phẩm thành công!\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"product_code\": \"SP0001\"\n            \"product_name\": \"Sản phẩm 1\"\n            \"thumbnail_link\": \"thumbnail.png\"\n            \"price\": 30000,\n            \"unit\": \"Thùng\",\n            \"unit_child\": \"Chai\",\n            \"quantity\": 9999,\n            \"quantity_child\": 24,\n            \"expired_at\": \"01/01/2023\",\n            \"guarantee\": 6,\n            \"quantity_sold\": 9999,\n            \"views\": 10000,\n            \"max_buy_number\": 50,\n            \"sale_price\": 15000,\n            \"sale_percent\": 50,\n            \"hot\": 0,\n            \"new\": 0,\n            \"promotion\": {\n                \"id\": 1,\n                \"promotion_code\": \"KM00050\",\n                \"promotion_name\": \"Khuyến mãi\",\n                \"content\": \"Khuyến mãi tất cả sản phẩm ngày hôm nay\",\n                \"image_link\": \"image.jpg\"\n            }\n        },\n        {\n            \"id\": 2,\n            \"product_code\": \"SP0002\"\n            \"product_name\": \"Sản phẩm 2\"\n            \"thumbnail_link\": \"thumbnail.png\"\n            \"price\": 30000,\n            \"unit\": \"Thùng\",\n            \"unit_child\": \"Gói\",\n            \"quantity\": 9999,\n            \"quantity_child\": 30,\n            \"expired_at\": \"01/01/2023\",\n            \"guarantee\": 3,\n            \"quantity_sold\": 8798,\n            \"views\": 454,\n            \"max_buy_number\": 50,\n            \"sale_price\": 0,\n            \"sale_percent\": 0,\n            \"hot\": 0,\n            \"new\": 0,\n            \"promotion\": null\n        },\n        {\n            \"id\": 3,\n            \"product_code\": \"SP0003\"\n            \"product_name\": \"Sản phẩm 3\"\n            \"thumbnail_link\": \"thumbnail.png\"\n            \"price\": 30000,\n            \"unit\": \"Thùng\",\n            \"unit_child\": \"Hộp\",\n            \"quantity\": 9999,\n            \"quantity_child\": 10,\n            \"expired_at\": \"01/01/2023\",\n            \"guarantee\": 8,\n            \"quantity_sold\": 564,\n            \"views\": 5456,\n            \"max_buy_number\": 50,\n            \"sale_price\": 15000,\n            \"sale_percent\": 50,\n            \"hot\": 0,\n            \"new\": 0,\n            \"promotion\": {\n                \"id\": 1,\n                \"promotion_code\": \"KM00010\",\n                \"promotion_name\": \"Khuyến mãi 10\",\n                \"content\": \"Khuyến mãi tất cả sản phẩm sữa\",\n                \"image_link\": \"image.jpg\"\n            }\n        },\n        {\n            \"id\": 4,\n            \"product_code\": \"SP0004\"\n            \"product_name\": \"Sản phẩm 4\"\n            \"thumbnail_link\": \"thumbnail.png\"\n            \"price\": 30000,\n            \"unit\": \"Lốc\",\n            \"unit_child\": \"Chai\",\n            \"quantity\": 9999,\n            \"quantity_child\": 6,\n            \"expired_at\": \"01/01/2023\",\n            \"guarantee\": 12,\n            \"quantity_sold\": 67,\n            \"views\": 6767,\n            \"max_buy_number\": 50,\n            \"sale_price\": 0,\n            \"sale_percent\": 0,\n            \"hot\": 0,\n            \"new\": 0\n            \"promotion\": null\n        }\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Không thể xử lý yêu cầu.</p> <ul>     <li><code>code:</code> 400</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Không tìm thấy dữ liệu.</p> <ul>     <li><code>code:</code> 404</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Sai định dạng URL!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Không tìm thấy dữ liệu!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi lấy danh sách sản phẩm: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/SanPham.py",
    "groupTitle": "Sản_phẩm"
  },
  {
    "type": "get",
    "url": "/brand",
    "title": "Lấy danh sách thương hiệu",
    "name": "Lấy_danh_sách_thương_hiệu",
    "group": "Sản_phẩm",
    "version": "1.0.0",
    "description": "<p>Lấy danh sách thương hiệu</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "keyword",
            "description": "<p><mark>Từ khóa tìm kiếm</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "product_group_id",
            "description": "<p><mark>ID nhóm sản phẩm</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "hot",
            "description": "<p><mark>Thương hiệu hot</mark></p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "new",
            "description": "<p><mark>Thương hiệu mới</mark></p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "promotion_id",
            "description": "<p><mark>ID khuyến mãi</mark></p> <ul>     <li><code>0:</code> Lấy thương hiệu không có khuyến mãi</li>     <li><code>-1:</code> Lấy tất cả thương hiệu đang khuyến mãi</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<p><mark>Sắp xếp theo: Mặc định là id</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_order",
            "description": "<p><mark>Kiểu sắp xếp: Mặc định asc</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p><mark>Giới hạn số lượng bản ghi</mark></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p><mark>Số phần tử bỏ qua</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "URL request:",
          "content": "https://www.bachhoaxanh.com/api/v1/brand?product_group_id=9&sort_by=id&sort_order=asc",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Danh sách thông tin thương hiệu</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID thương hiệu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.brand_code",
            "description": "<p>Mã thương hiệu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.brand_name",
            "description": "<p>Tên thương hiệu</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.logo_link",
            "description": "<p>Đường dẫn logo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content_html",
            "description": "<p>Nội dung mô tả thương hiệu</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.new",
            "description": "<p>Thương hiệu mới</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.hot",
            "description": "<p>Thương hiệu hot</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Lấy danh sách thương hiệu thành công!\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"brand_code\": \"VINAMILK\"\n            \"brand_name\": \"Vinamilk\"\n            \"logo_link\": \"vinamilk.png\"\n            \"content_html\": \"fdgdfgdfgssfsdf\"\n            \"hot\": 0,\n            \"new\": 0,\n        },\n        {\n            \"id\": 2,\n            \"brand_code\": \"OMO\"\n            \"brand_name\": \"OMO\"\n            \"logo_link\": \"omo.png\"\n            \"content_html\": \"fdgdfgdfgssfsdf\"\n            \"hot\": 0,\n            \"new\": 0,\n        },\n        {\n            \"id\": 3,\n            \"brand_code\": \"PEPSI\"\n            \"brand_name\": \"Pepsi\"\n            \"logo_link\": \"pepsi.png\"\n            \"content_html\": \"fdgdfgdfgssfsdf\"\n            \"hot\": 0,\n            \"new\": 0,\n        }\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Không thể xử lý yêu cầu.</p> <ul>     <li><code>code:</code> 400</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Không tìm thấy dữ liệu.</p> <ul>     <li><code>code:</code> 404</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Sai định dạng URL!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Không tìm thấy dữ liệu!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi lấy danh sách thương hiệu: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/SanPham.py",
    "groupTitle": "Sản_phẩm"
  },
  {
    "type": "get",
    "url": "/product/<id>",
    "title": "Lấy thông tin chi tiết sản phẩm",
    "name": "Lấy_thông_tin_sản_phẩm",
    "group": "Sản_phẩm",
    "version": "1.0.0",
    "description": "<p>Lấy thông tin chi tiết của sản phẩm</p>",
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p><mark>ID sản phẩm</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "URL request:",
          "content": "https://www.bachhoaxanh.com/api/v1/product/10",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Thông tin chi tiết sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.product_code",
            "description": "<p>Mã sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.product_name",
            "description": "<p>Tên sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.thumbnail_link",
            "description": "<p>Ảnh đại diện sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.price",
            "description": "<p>Giá gốc của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.unit",
            "description": "<p>Đơn vị của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.unit_child",
            "description": "<p>Đơn vị con của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.quantity",
            "description": "<p>Số lượng của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.quantity_child",
            "description": "<p>Số lượng con trong sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.guarantee",
            "description": "<p>Bảo hành</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.expired_at",
            "description": "<p>Ngày hết hạn</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.max_buy_number",
            "description": "<p>Số lượng mua tối đa</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.sale_price",
            "description": "<p>Giá bán khuyễn mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.sale_percent",
            "description": "<p>Phần trăm khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.new",
            "description": "<p>Sản phẩm mới</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.hot",
            "description": "<p>Sản phẩm hot</p> <ul>     <li><code>0:</code> False</li>     <li><code>1:</code> True</li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info_html",
            "description": "<p>Thông tin sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.note_html",
            "description": "<p>Ghi chú sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.views",
            "description": "<p>Số lượt xem</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.warning",
            "description": "<p>Lưu ý về sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "data.tag_id",
            "description": "<p>Danh sách ID tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.promotion",
            "description": "<p>Thông tin khuyến mãi của sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.promotion.id",
            "description": "<p>ID khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.promotion.promotion_code",
            "description": "<p>Mã khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.promotion.promotion_name",
            "description": "<p>Tên khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.promotion.content",
            "description": "<p>Nội dung khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.promotion.image_link",
            "description": "<p>Ảnh khuyến mãi</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Lấy thông tin sản phẩm thành công!\",\n    \"data\": {\n        \"id\": 10,\n        \"product_code\": \"SP00010\"\n        \"product_name\": \"Sản phẩm 10\"\n        \"thumbnail_link\": \"thumbnail.png\"\n        \"price\": 30000,\n        \"unit\": \"Thùng\",\n        \"unit_child\": \"Chai\",\n        \"quantity\": 9999,\n        \"quantity_child\": 24,\n        \"guarantee\": 6,\n        \"expired_at\": \"01/01/2023\",\n        \"max_buy_number\": 50,\n        \"sale_price\": 15000,\n        \"sale_percent\": 50,\n        \"hot\": 0,\n        \"new\": 0,\n        \"info_html\": \"Thông tin\",\n        \"note_html\": \"Ghi chú\",\n        \"views\": 10000,\n        \"warning\": \"Lưu ý\",\n        \"tag_id\": [1,2,3],\n        \"promotion\": {\n            \"id\": 1,\n            \"promotion_code\": \"KM00010\",\n            \"promotion_name\": \"Khuyến mãi 10\",\n            \"content\": \"Khuyến mãi tất cả sản phẩm sữa\",\n            \"image_link\": \"image.jpg\"\n        }\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Không thể xử lý yêu cầu.</p> <ul>     <li><code>code:</code> 400</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Không tìm thấy dữ liệu.</p> <ul>     <li><code>code:</code> 404</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Sai định dạng URL!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Không tìm thấy dữ liệu!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi lấy thông tin sản phẩm: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/SanPham.py",
    "groupTitle": "Sản_phẩm"
  },
  {
    "type": "delete",
    "url": "/bill/cancel-bill",
    "title": "Hủy đơn hàng",
    "name": "Hủy_đơn_hàng",
    "group": "Đơn_hàng",
    "version": "1.0.0",
    "description": "<p>Khách hàng hủy đơn hàng</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer</code> <mark>Chuỗi Token</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header mẫu:",
          "content": "{   \n    \"Content-Type\": \"application/json\",\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bill_id",
            "description": "<p>id đơn hàng</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Cách truyền parameter:",
          "content": "https://www.bachhoaxanh.com/api/v1/bill/cancel-bill?bill_id=1",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Kết quả trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark><br></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data",
            "description": "<p>Đối tượng trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.status",
            "description": "<p>Trạng thái đơn hàng <ul> <li><code>0:</code> đã hủy</li> <li><code>1:</code> chờ xác nhận</li> <li><code>2:</code> đang xuất hàng</li> <li><code>3:</code> đang giao hàng</li> <li><code>4:</code> đã nhận hàng</li> </ul></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Hủy đơn hàng thành công!\"\n    \"data\" {\n        \"status\": 0\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Lỗi Request từ phía Client <ul> <li><code>code:</code> 400</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Lỗi Không tìm thấy dữ liệu <ul> <li><code>code:</code> 404</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server <ul> <li><code>code:</code> 500</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Yêu cầu không hợp lệ!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Không tìm thấy đơn hàng!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Hủy đơn hàng không thành công!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/Donhang.py",
    "groupTitle": "Đơn_hàng"
  },
  {
    "type": "post",
    "url": "/bill/post-bill",
    "title": "Xác nhận đơn hàng",
    "name": "Tạo_đơn_hàng",
    "group": "Đơn_hàng",
    "version": "1.0.0",
    "description": "<p>Khách hàng ấn xác nhận đơn hàng, đơn hàng được tạo trong database</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p><mark>application/json</mark></p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer</code> <mark>Chuỗi Token</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header mẫu:",
          "content": "{\n    \"Content-Type\": \"application/json\",\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.customer_name",
            "description": "<p>tên khách hàng</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.customer_phone",
            "description": "<p>số điện thoại khách hàng</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.receiver_address",
            "description": "<p>địa chỉ nhận</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.receiver_phone",
            "description": "<p>số điện thoại người nhận</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.province_id",
            "description": "<p>id tỉnh, thành phố</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.district_id",
            "description": "<p>id quận, huyện</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.block_id",
            "description": "<p>id xã, phường</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.appointment_date",
            "description": "<p>ngày hẹn giao hàng</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.delivery_note",
            "description": "<p>ghi chú vận chuyển</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.bill_note",
            "description": "<p>ghi chú đơn hàng</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.ship_fee",
            "description": "<p>phí ship</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.total_price",
            "description": "<p>tổng tiền đơn hàng</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "Object.data.status",
            "description": "<p>Trạng thái đơn hàng <ul> <li><code>0:</code> đã hủy</li> <li><code>1:</code> chờ xác nhận</li> <li><code>2:</code> đang xuất hàng</li> <li><code>3:</code> đang giao hàng</li> <li><code>4:</code> đã nhận hàng</li> </ul></p>"
          },
          {
            "group": "Body",
            "type": "Object",
            "optional": false,
            "field": "Object.data.product",
            "description": "<p>Đối tượng sản phẩm trong đơn hàng</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.product.product_name",
            "description": "<p>tên sản phẩm</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.product.quantity",
            "description": "<p>mua với số lượng</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.product.expired_at",
            "description": "<p>ngày hết hạn</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.product.price",
            "description": "<p>giá sản phẩm</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Object.data.product.total_price",
            "description": "<p>tổng tiền sản phẩm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON - Body request:",
          "content": "{\n    \"customer_name\": \"Nguyễn Hoàng Sơn\",\n    \"customer_phone\": \"0353395973\",\n    \"receiver_name\": \"Phạm Tiến Mạnh\",\n    \"receiver_phone\": \"0973456233\",\n    \"province_id\": 1,\n    \"district_id\": 8,\n    \"block_id\": 6,\n    \"appointment_date\": \"2/7/2021\",\n    \"delivery_note\": \"mang lên lầu, gọi trước khi giao\",\n    \"bill_note\": \"tôi muốn lưu số người giao hàng\",\n    \"ship_fee\": 19000,\n    \"total_price\": 288000,\n    \"status\": 1,\n    \"product\": [\n          {\n              \"product_name\": \"snack Dorito bịch 64g\",\n              \"quantity\": 3,\n              \"expired_at\": \"30/10/2021\",\n              \"price\": 32000,\n              \"total_price\": 96000\n          },\n          {\n              \"product_name\": \"Hải sản ngũ sắc SG Food gói 300g\",\n              \"quantity\": 4,\n              \"expired_at\": \"30/4/2021\",\n              \"price\": 48000,\n              \"total_price\": 192000\n          }\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark><br></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Đơn hàng tiếp nhận thành công!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Lỗi Request từ phía Client <ul> <li><code>code:</code> 400</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server <ul> <li><code>code:</code> 500</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Yêu cầu không hợp lệ!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Tiếp nhận đơn hàng không thành công!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/Donhang.py",
    "groupTitle": "Đơn_hàng"
  },
  {
    "type": "get",
    "url": "/bill/get-customer-bills",
    "title": "Lịch sử mua hàng",
    "name": "lịch_sử_mua_hàng",
    "group": "Đơn_hàng",
    "version": "1.0.0",
    "description": "<p>Khách hàng xem lịch sử mua hàng</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer</code> <mark>Chuỗi Token</mark></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header mẫu:",
          "content": "{   \n    \"Content-Type\": \"application/json\",\n    \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\"\n}",
          "type": "JSON"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>id khách hàng</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Cách truyền parameter:",
          "content": "https://www.bachhoaxanh.com/api/v1/bill/get-customer-bills?customer_id=1",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Kết quả trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark><br></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Object.data",
            "description": "<p>Đối tượng trả về</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.list_bill",
            "description": "<p>Đối tượng danh sách đơn hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.list_bill.receiver_name",
            "description": "<p>người nhận hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.list_bill.receiver_phone",
            "description": "<p>số điện thoại người nhận</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.list_bill.province_id",
            "description": "<p>mã tỉnh, thành phố</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.list_bill.district_id",
            "description": "<p>mã quận, huyện</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.list_bill.block_id",
            "description": "<p>mã phường, xã</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.list_bill.appointment_date",
            "description": "<p>ngày hẹn giao hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.list_bill.finished_at",
            "description": "<p>ngày hoàn thành đơn hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.list_bill.delivery_note",
            "description": "<p>chú thích về giao hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.data.list_bill.bill_note",
            "description": "<p>chú thích riêng của khách hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.list_bill.ship_fee",
            "description": "<p>phí giao hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.list_bill.total_price",
            "description": "<p>tổng tiền của đơn hàng</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Object.data.list_bill.status",
            "description": "<p>Trạng thái đơn hàng <ul> <li><code>0:</code> đã hủy</li> <li><code>1:</code> chờ xác nhận</li> <li><code>2:</code> đang xuất hàng</li> <li><code>3:</code> đang giao hàng</li> <li><code>4:</code> đã nhận hàng</li> </ul></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.list_bill.product",
            "description": "<p>Đối tượng sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.list_bill.product.product_name",
            "description": "<p>tên sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.list_bill.product.quantity",
            "description": "<p>mua với số lượng</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.list_bill.product.expired_at",
            "description": "<p>ngày hết hạn</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.list_bill.product.price",
            "description": "<p>giá sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object.data.list_bill.product.total_price",
            "description": "<p>tổng tiền sản phẩm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Lấy danh sách đơn hàng thành công!\",\n    \"data\": {\n        \"list_bill\": [\n              { \n                  \"receiver_name\": \"Đinh Văn Hiệp\",\n                  \"receiver_phone\": \"0368498298\",\n                  \"province_id\": 2,\n                  \"district_id\": 10,\n                  \"block_id\": 9,\n                  \"appointment_date\": \"1/7/2021\",\n                  \"finished_at\": \"1/7/2021\",\n                  \"delivery_note\": \"mang lên lầu\",\n                  \"bill_note\": \"tôi muốn lấy hóa đơn\",\n                  \"ship_fee\": 17000,\n                  \"total_price\": 202000,\n                  \"status\": 0,\n                  \"product\": [\n                           {\n                               \"product_name\": \"Phô mai que hương sữa Tân Việt Sin gói 400g\",\n                               \"quantity\": 2,\n                               \"expired_at\": \"30/10/2021\",\n                               \"price\": 101000,\n                               \"total_price\": 202000\n                           }\n                  ]\n              },\n              { \n                  \"receiver_name\": \"Phạm Tiến Mạnh\",\n                  \"receiver_phone\": \"0973456233\",\n                  \"province_id\": 1,\n                  \"district_id\": 8,\n                  \"block_id\": 6,\n                  \"appointment_date\": \"2/7/2021\",\n                  \"finished_at\": \"\",\n                  \"delivery_note\": \"mang lên lầu, gọi trước khi giao\",\n                  \"bill_note\": \"tôi muốn lưu số người giao hàng\",\n                  \"ship_fee\": 19000,\n                  \"total_price\": 288000,\n                  \"status\": 1,\n                  \"product\": [\n                           {\n                               \"product_name\": \"snack Dorito bịch 64g\",\n                               \"quantity\": 3,\n                               \"expired_at\": \"30/10/2021\",\n                               \"price\": 32000,\n                               \"total_price\": 96000\n                           },\n                           {\n                               \"product_name\": \"Hải sản ngũ sắc SG Food gói 300g\",\n                               \"quantity\": 4,\n                               \"expired_at\": \"30/4/2021\",\n                               \"price\": 48000,\n                               \"total_price\": 192000\n                           }\n                  ]\n              }\n        ]\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Lỗi Request từ phía Client <ul> <li><code>code:</code> 400</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Lỗi Không tìm thấy dữ liệu <ul> <li><code>code:</code> 404</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server <ul> <li><code>code:</code> 500</li> <li><code>message:</code> Thông báo lỗi</li> </ul></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Yêu cầu không hợp lệ!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Không tìm thấy danh sách đơn hàng!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Lấy danh sách đơn hàng không thành công!\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/Donhang.py",
    "groupTitle": "Đơn_hàng"
  },
  {
    "type": "get",
    "url": "/sector",
    "title": "Lấy danh sách khu vực",
    "name": "Lấy_danh_sách_khu_vực",
    "group": "Địa_chỉ",
    "version": "1.0.0",
    "description": "<p>Lấy danh sách khu vực</p>",
    "parameter": {
      "examples": [
        {
          "title": "URL request:",
          "content": "https://www.bachhoaxanh.com/api/v1/sector",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Mã trạng thái HTTP <br><mark>200-OK: Yêu cầu được tiếp nhận và xử lý thành công</mark></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Thông báo kết quả</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Danh sách thông tin khu vực</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID khu vực</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.parent_id",
            "description": "<p>ID khu vực cha</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.code",
            "description": "<p>Mã nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Tên nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.level",
            "description": "<p>Cấp khu vực</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.child",
            "description": "<p>Danh sách thông tin khu vực con</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.child.id",
            "description": "<p>ID khu vực</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.child.parent_id",
            "description": "<p>ID khu vực cha</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.child.code",
            "description": "<p>Mã nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.child.name",
            "description": "<p>Tên nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.child.level",
            "description": "<p>Cấp khu vực</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.child.child",
            "description": "<p>Danh sách thông tin khu vực con</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.child.child.id",
            "description": "<p>ID khu vực</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.child.child.parent_id",
            "description": "<p>ID khu vực cha</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.child.child.code",
            "description": "<p>Mã nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.child.child.name",
            "description": "<p>Tên nhóm sản phẩm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.child.child.level",
            "description": "<p>Cấp khu vực</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success 200:",
          "content": "{\n    \"code\": 200,\n    \"message\": \"Lấy danh sách khu vực thành công!\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"parent_id\": 0,\n            \"code\": \"NSP0001\",\n            \"name\": \"TP. Hồ Chí Minh\",\n            \"level\": 1,\n            \"child\": [\n                {\n                    \"id\": 68,\n                    \"parent_id\": 1,\n                    \"code\": \"NSP0068\",\n                    \"name\": \"Quận 1\",\n                    \"level\": 2,\n                    \"child\": [\n                         {\n                            \"id\": 70,\n                            \"parent_id\": 68,\n                            \"code\": \"NSP0068\",\n                            \"name\": \"An Khánh\",\n                            \"level\": 3\n                        }\n                    ]\n                },\n                {\n                    \"id\": 69,\n                    \"parent_id\": 1,\n                    \"code\": \"NSP0069\",\n                    \"name\": \"Quận 2\",\n                    \"level\": 2,\n                    \"child\": [\n                         {\n                            \"id\": 71,\n                            \"parent_id\": 69,\n                            \"code\": \"NSP0071\",\n                            \"name\": \"Nhà Thờ\",\n                            \"level\": 3\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            \"id\": 2,\n            \"parent_id\": 0,\n            \"code\": \"NSP0001\",\n            \"name\": \"An Giang\",\n            \"level\": 1,\n            \"child\": [\n                {\n                    \"id\": 80,\n                    \"parent_id\": 2,\n                    \"code\": \"NSP0069\",\n                    \"name\": \"TP. Châu Đốc\",\n                    \"level\": 2,\n                    \"child\": [\n                         {\n                            \"id\": 82,\n                            \"parent_id\": 80,\n                            \"code\": \"NSP0071\",\n                            \"name\": \"Hòa An\",\n                            \"level\": 3\n                        }\n                    ]\n                }                \n            ]\n        }\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400-BadRequest",
            "description": "<p>Không thể xử lý yêu cầu.</p> <ul>     <li><code>code:</code> 400</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404-NotFound",
            "description": "<p>Không tìm thấy dữ liệu.</p> <ul>     <li><code>code:</code> 416</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500-InternalServerError",
            "description": "<p>Lỗi Server</p> <ul>     <li><code>code:</code> 500</li>     <li><code>message:</code> Thông báo lỗi</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error 400:",
          "content": "{\n    \"code\": 400,\n    \"message\": \"Sai định dạng URL!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 404:",
          "content": "{\n    \"code\": 404,\n    \"message\": \"Không tìm thấy dữ liệu!\"\n}",
          "type": "JSON"
        },
        {
          "title": "Error 500:",
          "content": "{\n    \"code\": 500,\n    \"message\": \"Xảy ra lỗi khi lấy quảng cáo: Mô tả lỗi.\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "source/KhuVuc.py",
    "groupTitle": "Địa_chỉ"
  }
] });