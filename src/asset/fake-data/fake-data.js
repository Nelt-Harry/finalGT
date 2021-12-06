const data = [
    {
        name: "Các câu hỏi điểm liệt",
        question: [
            {
                question:
                    "Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?",
                correctAns: "Phần đường xe chạy.",
                answers: [
                    "Phần mặt đường và lề đường.",
                    "Phần đường xe chạy.",
                    "Phần đường xe cơ giới.",
                ],
            },
            {
                question:
                    "Phương tiện tham gia giao thông đường bộ” gồm những loại nào?",
                correctAns: "Cả ý 1 và ý 2.",
                answers: [
                    "Phương tiện giao thông cơ giới đường bộ.",
                    "Phương tiện giao thông thô sơ đường bộ và xe máy chuyên dùng.",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question:
                    "Sử dụng rượu bia khi lái xe, nếu bị phát hiện thì bị xử lý như thế nào?",
                correctAns:
                    "Bị xử phạt hành chính hoặc có thể bị xử lý hình sự tùy theo mức độ vi phạm.",
                answers: [
                    "Chỉ bị nhắc nhở.",
                    "Bị xử phạt hành chính hoặc có thể bị xử lý hình sự tùy theo mức độ vi phạm.",
                    "Không bị xử lý hình sự.",
                ],
            },
            {
                question:
                    "Bạn đang lái xe phía trước có một xe cứu thương đang phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
                correctAns: "Không được vượt.",
                answers: [
                    "Không được vượt.",
                    "Được vượt khi đang đi trên cầu.",
                    "Được vượt khi đảm bảo an toàn.",
                ],
            },
            {
                question:
                    "Hành vi sử dụng xe mô tô để kéo, đẩy xe mô tô khác bị hết xăng đến trạm mua xăng có được phép hay không?",
                correctAns: "Không được phép.",
                answers: [
                    "Chỉ được kéo nếu đã nhìn thấy trạm xăng.",
                    "Chỉ được thực hiện trên đường vắng phương tiện cùng tham gia giao thông.",
                    "Không được phép.",
                ],
            },
            {
                question:
                    "Biển báo hiệu hình tròn có nền xanh lam có hình vẽ màu trắng là loại biển gì dưới đây?",
                correctAns: "Biển báo hiệu lệnh phải thi hành.",
                image: "https://hoclaixemoto.com/image200/41.jpg",
                answers: [
                    "Biển báo nguy hiểm.",
                    "Biển báo hiệu lệnh phải thi hành.",
                    "Biển báo chỉ dẫn.",
                ],
            },
            {
                question:
                    "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
                correctAns: "Chỉ được báo hiệu bằng đèn.",
                answers: [
                    "Phải báo hiệu bằng đèn hoặc còi.",
                    "Chỉ được báo hiệu bằng còi.",
                    "Chỉ được báo hiệu bằng đèn.",
                ],
            },
            {
                question:
                    "Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?",
                correctAns:
                    "Xe cơ giới, xe máy chuyên dùng phải bật đèn; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; chỉ được dừng xe, đỗ xe ở nơi quy định.",
                answers: [
                    "Xe cơ giới, xe máy chuyên dùng phải bật đèn; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; chỉ được dừng xe, đỗ xe ở nơi quy định.",
                    "Xe cơ giới phải bật đèn ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết.",
                    "Xe máy chuyên dùng phải bật đèn ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết.",
                ],
            },
            {
                question:
                    "Trên đoạn đường hai chiều không có giải phân cách giữa, người lái xe không được vượt xe khác trong các trường hợp nào dưới đây?",
                correctAns: "Cả ý 1 và ý 2.",
                answers: [
                    "Xe bị vượt bất ngờ tăng tốc độ và cố tình không nhường đường.",
                    "Phát hiện có xe đi ngược chiều.",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question:
                    "Khi điều khiển xe chạy với tốc độ dưới 60 km/h, để đảm bảo khoảng cách an toàn giữa hai xe, người lái xe phải điều khiển xe như thế nào?",
                correctAns: "Cả ý 1 và ý 2.",
                answers: [
                    "Chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước xe của mình.",
                    "Đảm bảo khoảng cách an toàn theo mật độ phương tiện, tình hình giao thông thực tế.",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question:
                    "Để báo hiệu cho xe phía trước biết xe mô tô của bạn muốn vượt, bạn phải có tín hiệu như thế nào dưới đây?",
                correctAns: "Bạn phải có tín hiệu bằng đèn hoặc còi.",
                answers: [
                    "Ra tín hiệu bằng tay rồi cho xe vượt qua.",
                    "Tăng ga mạnh để gây sự chú ý rồi cho xe vượt qua.",
                    "Bạn phải có tín hiệu bằng đèn hoặc còi.",
                ],
            },
            {
                question:
                    "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
                correctAns:
                    "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
                answers: [
                    "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
                    "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
                    "Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe.",
                ],
            },
            {
                question:
                    "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
                correctAns:
                    "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
                answers: [
                    "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
                    "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
                    "Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe.",
                ],
            },
            {
                question:
                    "Tay ga trên xe mô tô hai bánh có tác dụng gì trong các trường hợp dưới đây?",
                correctAns: "Cả ý 1 và ý 2.",
                answers: [
                    "Để điều khiển xe chạy về phía trước.",
                    "Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question: "Biển nào cấm xe rẽ trái?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/105.jpg",
                answers: ["Biển 1.", "Biển 2.", "Cả hai biển."],
            },
            {
                question:
                    "Biển nào dưới đây các phương tiện không được phép đi vào?",
                correctAns: "Biển 1 và 2",
                image: "https://hoclaixemoto.com/image200/113.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 1 và 2"],
            },
            {
                question:
                    "Biển nào dưới đây các phương tiện không được phép đi vào?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/113.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3"],
            },
            {
                question:
                    "Biển nào báo hiệu nguy hiểm giao nhau với đường sắt?",
                correctAns: "Biển 1 và 3.",
                image: "https://hoclaixemoto.com/image200/129.jpg",
                answers: [
                    "Biển 1 và 2.",
                    "Biển 1 và 3.",
                    "Biển 2 và 3.",
                    "Cả ba biển.",
                ],
            },
            {
                question:
                    "Biển nào báo hiệu “Đường giao nhau” của các tuyến đường cùng cấp?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/137.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Cả ba biển."],
            },
            {
                question:
                    "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/137.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Cả ba biển."],
            },
            {
                question: "Biển nào dưới đây báo hiệu hết cấm vượt?",
                correctAns: "Biển 2 và 3.",
                image: "https://hoclaixemoto.com/image200/153.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Biển 2 và 3."],
            },
            {
                question:
                    "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường), xe không được lấn làn, không được đè lên vạch?",
                correctAns: "Vạch 2.",
                image: "https://hoclaixemoto.com/image200/161.jpg",
                answers: ["Vạch 1.", "Vạch 2.", "Vạch 3.", "Cả 3 vạch."],
            },
            {
                question: "Xe nào được quyền đi trước trong trường hợp này?",
                correctAns: "Mô tô.",
                image: "https://hoclaixemoto.com/image200/169.jpg",
                answers: ["Mô tô.", "Xe cứu thương."],
            },
            {
                question:
                    "Xe tải kéo mô tô ba bánh như hình này có đúng quy tắc giao thông không?",
                correctAns: "Không đúng.",
                image: "https://hoclaixemoto.com/image200/177.jpg",
                answers: ["Đúng.", "Không đúng."],
            },
            {
                question:
                    "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
                correctAns: "Hướng 1 và 3.",
                image: "https://hoclaixemoto.com/image200/185.jpg",
                answers: [
                    "Hướng 1 và 2.",
                    "Hướng 1 và 3.",
                    "Hướng 2 và 3.",
                    "Cả ba hướng.",
                ],
            },
            {
                question:
                    "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                correctAns: "Xe tải, xe khách, xe mô tô.",
                image: "https://hoclaixemoto.com/image200/193.jpg",
                answers: [
                    "Xe con, xe tải, xe khách.",
                    "Xe tải, xe khách, xe mô tô.",
                    "Xe khách, xe mô tô, xe con.",
                    "Xe khách, xe mô tô, xe con.",
                ],
            },
        ],
    },
    {
        name: "Khái niệm và quy tắc",
        question: [
            {
                question: "“Làn đường” là gì?",
                correctAns:
                    "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.",
                answers: [
                    "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
                    "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn.",
                    "Là đường cho xe ô tô chạy, dừng, đỗ an toàn.",
                ],
            },
            {
                question:
                    "“Người tham gia giao thông đường bộ” gồm những đối tượng nào?",
                correctAns: "Cả ý 1 và ý 2.",
                answers: [
                    "Người điều khiển, người sử dụng phương tiện tham gia giao thông đường bộ.",
                    "Người điều khiển, dẫn dắt súc vật; người đi bộ trên đường bộ.",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question:
                    "Theo Luật phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu bia khi tham gia giao thông?",
                correctAns:
                    "Người điều khiển: Xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
                answers: [
                    "Người điều khiển: Xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
                    "Người ngồi phía sau người điều khiển xe cơ giới.",
                    "Người đi bộ.",
                ],
            },
            {
                question:
                    "Người điều khiển xe mô tô hai bánh, ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
                correctAns: "Không được phép.",
                answers: [
                    "Được phép.",
                    "Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.",
                    "Không được phép.",
                ],
            },
            {
                question:
                    "Hành vi vận chuyển đồ vật cồng kềnh bằng xe mô tô, xe gắn máy khi tham gia giao thông có được phép hay không?",
                correctAns: "Không được vận chuyển.",
                answers: [
                    "Không được vận chuyển.",
                    "Chỉ được vận chuyển khi đã chằng buộc cẩn thận.",
                    "Chỉ được vận chuyển vật cồng kềnh trên xe máy nếu khoảng cách về nhà ngắn hơn 2 km.",
                ],
            },
            {
                question:
                    "Biển báo hiệu hình chữ nhật hoặc hình vuông hoặc hình mũi tên nền xanh lam là loại biển gì dưới đây?",
                correctAns: "Biển báo chỉ dẫn.",
                image: "https://hoclaixemoto.com/image200/42.jpg",
                answers: [
                    "Biển báo nguy hiểm.",
                    "Biển báo hiệu lệnh phải thi hành.",
                    "Biển báo chỉ dẫn.",
                ],
            },
            {
                question:
                    "Khi điều khiển xe chạy trên đường biết có xe sau xin vượt nếu đủ điều kiện an toàn người lái xe phải làm gì?",
                correctAns:
                    "Người điều khiển phương tiện phía trước phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại cho xe sau vượt.",
                answers: [
                    "Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe sau vượt.",
                    "Người điều khiển phương tiện phía trước phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại cho xe sau vượt.",
                    "Cho xe tránh về bên trái mình và ra hiệu cho xe sau vượt; nếu có chướng ngại vật phía trước hoặc thiếu điều kiện an toàn chưa cho vượt được phải ra hiệu cho xe sau biết; cấm gây trở ngại cho xe xin vượt.",
                ],
            },
            {
                question:
                    "Người ngồi trên xe mô tô 2 bánh, xe gắn máy phải đội mũ bảo hiểm có cài quai đúng quy cách khi nào?",
                correctAns: "Khi tham gia giao thông đường bộ.",
                answers: [
                    "Khi tham gia giao thông đường bộ.",
                    "Chỉ khi đi trên đường chuyên dùng; đường cao tốc.",
                    "Khi tham gia giao thông trên đường tỉnh lộ hoặc quốc lộ.",
                ],
            },
            {
                question:
                    "Người lái xe mô tô xử lý như thế nào khi cho xe mô tô phía sau vượt?",
                correctAns:
                    "Nếu đủ điều kiện an toàn, người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại đối với xe xin vượt.",
                answers: [
                    "Nếu đủ điều kiện an toàn, người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại đối với xe xin vượt.",
                    "Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
                    "Nếu đủ điều kiện an toàn, người lái xe phải tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua.",
                ],
            },
            {
                question:
                    "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thế xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
                correctAns: "Gặp biển báo nguy hiểm trên đường.",
                answers: [
                    "Gặp biển báo nguy hiểm trên đường.",
                    "Gặp biển chỉ dẫn trên đường.",
                    "Gặp biển báo hết mọi lệnh cấm.",
                ],
            },
            {
                question:
                    "Người điều khiển xe mô tô phải giảm tốc độ và hết sức thận trọng khi qua những đoạn đường nào dưới đây?",
                correctAns: "Tất cả các ý nêu trên.",
                answers: [
                    "Đường ướt, đường có sỏi cát trên nền đường.",
                    "Đường hẹp có nhiều điểm giao cắt từ hai phía.",
                    "Đường đèo dốc, vòng liên tục.",
                    "Tất cả các ý nêu trên.",
                ],
            },
            {
                question:
                    "Khi quay đầu xe, người lái xe cần phải quan sát và thực hiện các thao tác nào để đảm bảo an toàn giao thông?",
                correctAns:
                    "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe cho thích hợp; quay đầu xe với tốc độ thấp; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đầu xe về phía nguy hiểm đưa đuôi xe về phía an toàn.",
                answers: [
                    "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe cho thích hợp; quay đầu xe với tốc độ thấp; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đầu xe về phía nguy hiểm đưa đuôi xe về phía an toàn.",
                    "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe; quay đầu xe với tốc độ tối đa; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đuôi xe về phía nguy hiểm và đầu xe về phía an toàn.",
                ],
            },
            {
                question:
                    "Gương chiếu hậu của xe mô tô hai bánh, có tác dụng gì trong các trường hợp dưới đây?",
                correctAns:
                    "Để quan sát an toàn phía sau cả bên trái và bên phải trước khi chuyển hướng.",
                answers: [
                    "Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
                    "Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
                    "Để quan sát an toàn phía sau cả bên trái và bên phải trước khi chuyển hướng.",
                    "Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng.",
                ],
            },
            {
                question:
                    "Tay ga trên xe mô tô hai bánh có tác dụng gì trong các trường hợp dưới đây?",
                correctAns: "Cả ý 1 và ý 2.",
                answers: [
                    "Để điều khiển xe chạy về phía trước.",
                    "Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question: "Khi gặp biển nào xe được rẽ trái?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/106.jpg",
                answers: ["Biển 1.", "Biển 2.", "Không biển nào."],
            },
            {
                question:
                    "Biển nào dưới đây các phương tiện không được phép đi vào?",
                correctAns: "Biển 1 và 2",
                image: "https://hoclaixemoto.com/image200/113.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 1 và 2"],
            },
            {
                question:
                    "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/114.jpg",
                answers: ["Biển 1.", "Biển 2.", "Cả ba biển."],
            },
            {
                question:
                    "Biển báo nào báo hiệu bắt đầu đoạn đường vào phạm vi khu dân cư, các phương tiện tham gia giao thông phải tuân theo các quy định đi đường được áp dụng ở khu đông dân cư?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/122.jpg",
                answers: ["Biển 1.", "Biển 2."],
            },
            {
                question:
                    "Biển nào báo hiệu Đường sắt giao nhau với đường bộ không có rào chắn?",
                correctAns: "Biển 2 và 3.",
                image: "https://hoclaixemoto.com/image200/130.jpg",
                answers: [
                    "Biển 1 và 2.",
                    "Biển 1 và 3.",
                    "Biển 2 và 3.",
                    "Cả ba biển.",
                ],
            },
            {
                question: "Biển nào báo hiệu “Đường đôi”?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/138.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Cả ba biển."],
            },
            {
                question: "Biển báo này có ý nghĩa gì",
                correctAns: "Báo hiệu đường có gồ giảm tốc phía trước.",
                image: "https://hoclaixemoto.com/image200/146.jpg",
                answers: [
                    "Báo hiệu đường có ổ gà, lồi lõm.",
                    "Báo hiệu đường có gồ giảm tốc phía trước.",
                ],
            },
            {
                question:
                    "Trong các biển dưới đây biển nào là biển “Hết mọi lệnh cấm”?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/154.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Cả ba biển."],
            },
            {
                question:
                    "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường)?",
                correctAns: "Vạch 1 và 3",
                image: "https://hoclaixemoto.com/image200/162.jpg",
                answers: ["Vạch 1.", "Vạch 2.", "Vạch 3.", "Vạch 1 và 3"],
            },
            {
                question: "Theo tín hiệu đèn, xe nào được phép đi?",
                correctAns: "Xe con và xe khách.",
                image: "https://hoclaixemoto.com/image200/170.jpg",
                answers: ["Xe con và xe khách.", "Mô tô."],
            },
            {
                question: "Xe nào được quyền đi trước trong trường hợp này?",
                correctAns: "Xe mô tô.",
                image: "https://hoclaixemoto.com/image200/178.jpg",
                answers: ["Xe con.", "Xe mô tô."],
            },
            {
                question:
                    "Trong trường hợp này, thứ tự xe đi như thế nào là đúng quy tắc giao thông?",
                image: "https://hoclaixemoto.com/image200/186.jpg",
                correctAns: "Xe quân sự, xe công an, xe con + mô tô.",
                answers: [
                    "Xe công an, xe quân sự, xe con + mô tô.",
                    "Xe quân sự, xe công an, xe con + mô tô.",
                    "Xe mô tô + xe con, xe quân sự, xe công an.",
                ],
            },
            {
                question:
                    "Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
                image: "https://hoclaixemoto.com/image200/194.jpg",
                correctAns: "Xe khách, mô tô.",
                answers: [
                    "Xe tải, mô tô.",
                    "Xe khách, mô tô.",
                    "Xe tải, xe con.",
                    "Mô tô, xe con.",
                ],
            },
        ],
    },
    {
        name: "Văn hóa đạo đức lái xe",
        question: [
            {
                question:
                    "Trong các khái niệm dưới đây, “dải phân cách” được hiểu như thế nào là đúng?",
                correctAns:
                    "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
                answers: [
                    "Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép.",
                    "Là bộ phận của đường để phân tách phần đường xe chạy và hành lang an toàn giao thông.",
                    "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
                ],
            },
            {
                question:
                    "“Người điều khiển phương tiện tham gia giao thông đường bộ” gồm những đối tượng nào dưới đây?",
                correctAns: "Cả ý 1 và ý 2.",
                answers: [
                    "Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
                    "Người điều khiển xe máy chuyên dùng tham gia giao thông đường bộ.",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question:
                    "Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?",
                correctAns: "Bị nghiêm cấm.",
                answers: [
                    "Bị nghiêm cấm tuỳ từng trường hợp.",
                    "Không bị nghiêm cấm.",
                    "Bị nghiêm cấm.",
                ],
            },
            {
                question:
                    "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy có được phép hay không?",
                correctAns: "Không được phép.",
                answers: ["Được phép.", "Tuỳ trường hợp.", "Không được phép."],
            },
            {
                question:
                    "Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe mô tô hai bánh, xe mô tô ba bánh có dung tích xi lanh từ 50 cm3 trở lên và các loại xe có kết cấu tương tự; xe ô tô tải, máy kéo có trọng tải dưới 3,5 tấn; xe ô tô chở người đến 9 chỗ ngồi",
                correctAns: "2-18 tuổi.",
                answers: ["1-16 tuổi.", "2-18 tuổi.", "3-17 tuổi."],
            },
            {
                question:
                    "Khi sử dụng giấy phép lái xe đã khai báo mất để điều khiển phương tiện cơ giới đường bộ, ngoài việc bị thu hồi giấy phép lái xe, chịu trách nhiệm trước pháp luật, người lái xe không được cấp giấy phép lái xe trong thời gian bao nhiêu năm?",
                correctAns: "3-05 năm",
                answers: ["1-02 năm.", "2-03 năm.", "3-05 năm"],
            },
            {
                question:
                    "Khi muốn chuyển hướng, người lái xe phải thực hiện như thế nào để đảm bảo an toàn giao thông?",
                correctAns:
                    "Quan sát gương, giảm tốc độ, ra tín hiệu chuyển hướng, quan sát an toàn và chuyển hướng.",
                answers: [
                    "Quan sát gương, ra tín hiệu, quan sát an toàn và chuyển hướng",
                    "Quan sát gương, giảm tốc độ, ra tín hiệu chuyển hướng, quan sát an toàn và chuyển hướng.",
                    "Quan sát gương, tăng tốc độ, ra tín hiệu và chuyển hướng",
                ],
            },
            {
                question:
                    "Người điểu khiển xe mô tô hai bánh, xe gắn máy được phép chở tối đa 2 người trong những trường hợp nào?",
                correctAns: "Cả ý 1 và ý 2.",
                answers: [
                    "Chở người bệnh đi cấp cứu; trẻ em dưới 14 tuổi.",
                    "Áp giải người có hành vi vi phạm pháp luật.",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question:
                    "Trong các trường hợp dưới đây, để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
                correctAns:
                    "Phải đội mũ bảo hiểm đạt chuẩn, có cài quai đúng quy cách, mặc quần áo gọn gàng; không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
                answers: [
                    "Phải đội mũ bảo hiểm đạt chuẩn, có cài quai đúng quy cách, mặc quần áo gọn gàng; không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
                    "Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải đảm bảo an toàn.",
                    "Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa.",
                ],
            },
            {
                question:
                    "Các phương tiện tham gia giao thông đường bộ (kể cả những xe có quyền ưu tiên) đều phải dừng lại bên phải đường của mình và trước vạch “dừng xe” tại các điểm giao cắt giữa đường bộ và đường sắt khi có báo hiệu dừng nào dưới đây?",
                correctAns: "Tất cả các ý trên.",
                answers: [
                    "Hiệu lệnh của nhân viên gác chắn.",
                    "Đèn đỏ sáng nháy, cờ đỏ, biển đỏ.",
                    "Còi, chuông kêu, chắn đã đóng",
                    "Tất cả các ý trên.",
                ],
            },
            {
                question:
                    "Khi gặp xe buýt đang đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào dưới đây để đảm bảo an toàn giao thông?",
                correctAns:
                    "Giảm tốc độ đến mức an toàn có thể và quan sát người qua đường và từ từ vượt qua xe buýt.",
                answers: [
                    "Tăng tốc độ để nhanh chóng vượt qua bến đỗ.",
                    "Giảm tốc độ đến mức an toàn có thể và quan sát người qua đường và từ từ vượt qua xe buýt.",
                    "Yêu cầu phải dừng lại phía sau xe buýt chờ xe rời bến mới đi tiếp.",
                ],
            },
            {
                question:
                    "Khi tránh nhau trên đường hẹp, người lái xe cần phải chú ý những điểm nào để đảm bảo an toàn giao thông?",
                correctAns: "Cả ý 1 và ý 2.",
                answers: [
                    "Không nên đi cố vào đường hẹp; xe đi ở sườn núi nên dừng lại trước để nhường đường; khi dừng xe nhường đường phải đỗ ngay ngắn.",
                    "Trong khi tránh nhau không nên đổi số; khi tránh nhau ban đêm, phải tắt đèn pha bật đèn cốt.",
                    "Khi tránh nhau ban đêm, phải thường xuyên bật đèn pha tắt đèn cốt.",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question:
                    "Để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào trong các trường hợp dưới đây?",
                correctAns: "Tăng ga từ từ, giảm ga thật nhanh.",
                answers: [
                    "Tăng ga thật nhanh, giảm ga từ từ.",
                    "Tăng ga thật nhanh, giảm ga thật nhanh.",
                    "Tăng ga từ từ, giảm ga thật nhanh.",
                    "Tăng ga từ từ, giảm ga từ từ.",
                ],
            },
            {
                question:
                    "Biển nào cấm các phương tiện giao thông đường bộ rẽ phải?",
                correctAns: "Biển 1 và 2.",
                image: "https://hoclaixemoto.com/image200/107.jpg",
                answers: ["Biển 1 và 2.", "Biển 1 và 3.", "Biển 2 và 3."],
            },
            {
                question:
                    "Biển nào cấm tất cả các loại xe cơ giới và thô sơ đi lại trên đường, trừ xe ưu tiên theo luật định (nếu đường vẫn cho xe chạy được)?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/115.jpg",
                answers: ["Biển 1.", "Biển 2.", "Không biển nào."],
            },
            {
                question:
                    "Biển nào dưới đây các phương tiện không được phép đi vào?",
                correctAns: "Biển 1 và 2",
                image: "https://hoclaixemoto.com/image200/113.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 1 và 2"],
            },
            {
                question:
                    "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/123.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3", "Cả ba biển."],
            },
            {
                question:
                    "Biển nào báo hiệu sắp đến chỗ giao nhau giữa đường bộ và đường sắt?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/131.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biên 3."],
            },
            {
                question: "Biển nào báo hiệu “Đường đôi”?",
                correctAns: "Biển 3.",
                image: "https://hoclaixemoto.com/image200/139.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Cả ba biển."],
            },
            {
                question: "Biển nào báo hiệu “Đường đôi”?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/138.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Cả ba biển."],
            },
            {
                question:
                    "Biển nào (đặt trước ngã ba, ngã tư) cho phép xe được rẽ sang hướng khác?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/147.jpg",
                answers: ["Biển 1", "Biển 2.", "Không biển nào."],
            },
            {
                question:
                    "Biển nào chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/163.jpg",
                answers: [
                    "Biển 1.",
                    "Biển 2.",
                    "Cả hai biển.",
                    "Không biển nào.",
                ],
            },
            {
                question:
                    "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                correctAns: "Xe khách, xe tải, mô tô.",
                image: "https://hoclaixemoto.com/image200/171.jpg",
                answers: [
                    "Xe khách, xe tải, mô tô.",
                    "Xe tải, xe con, mô tô.",
                    "Xe tải, xe con, mô tô.",
                ],
            },
            {
                question:
                    "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                correctAns: "Xe con (A), xe con (B), mô tô + xe đạp.",
                image: "https://hoclaixemoto.com/image200/179.jpg",
                answers: [
                    "Xe con (A), mô tô, xe con (B), xe đạp.",
                    "Xe con (B), xe đạp, mô tô, xe con (A).",
                    "Xe con (A), xe con (B), mô tô + xe đạp.",
                    "Mô tô + xe đạp, xe con (A), xe con (B).",
                ],
            },
            {
                question:
                    "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
                correctAns: "Xe con (E), mô tô (C).",
                image: "https://hoclaixemoto.com/image200/187.jpg",
                answers: [
                    "Xe con (E), mô tô (C).",
                    "Xe tải (A), mô tô (D)",
                    "Xe khách (B), mô tô (C).",
                    "Xe khách (B), mô tô (D).",
                ],
            },
            {
                question:
                    "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
                correctAns: "Mô tô, xe con, xe của bạn",
                image: "https://hoclaixemoto.com/image200/195.jpg",
                answers: [
                    "Xe của bạn, mô tô, xe con",
                    "Xe con, xe của bạn, mô tô.",
                    "Mô tô, xe con, xe của bạn",
                ],
            },
        ],
    },
    {
        name: "Kỹ thuật lái xe",
        question: [
            {
                question: "“Dải phân cách” trên đường bộ gồm những loại nào?",
                correctAns: "Dải phân cách gồm loại cố định và loại di động.",
                answers: [
                    "Dải phân cách gồm loại cố định và loại di động.",
                    "Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm.",
                    "Dải phân cách gồm giá long môn và biển báo hiệu đường bộ.",
                ],
            },
            {
                question:
                    "Khái niệm “người điều khiển giao thông” được hiểu như thế nào là đúng?",
                correctAns:
                    "Là cảnh sát giao thông, người được giao nhiệm vụ hướng dẫn giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
                answers: [
                    "Là người điều khiển phương tiện tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
                    "Là cảnh sát giao thông, người được giao nhiệm vụ hướng dẫn giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
                    "Là người tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
                ],
            },
            {
                question:
                    "Khi lái xe trong khu đô thị và đông dân cư trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi như thế nào trong các trường hợp dưới đây?",
                correctAns: "Từ 5 giờ sáng đến 22 giờ tối.",
                answers: [
                    "Từ 22 giờ đêm đến 5 giờ sáng.",
                    "Từ 5 giờ sáng đến 22 giờ tối.",
                    "Từ 23 giờ đêm đến 5 giờ sáng hôm sau.",
                ],
            },
            {
                question:
                    "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào không được phép?",
                correctAns:
                    "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy.",
                answers: [
                    "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy.",
                    "Buông một tay; sử dụng xe để chở người hoặc hàng hoá; để chân chạm xuống đất khi khởi hành.",
                    "Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.",
                    "Chở người ngồi sau dưới 16 tuổi.",
                ],
            },
            {
                question:
                    "Người đủ 16 tuổi được điều khiển các loại xe nào dưới đây?",
                correctAns: "Xe gắn máy có dung tích xi-lanh dưới 50 cm3.",
                answers: [
                    "Xe mô tô 2 bánh có dung tích xi-lanh từ 50 cm3 trở lên.",
                    "Xe gắn máy có dung tích xi-lanh dưới 50 cm3.",
                    "Xe ô tô tải dưới 3,5 tấn; xe chở người đến 9 chỗ ngồi",
                ],
            },
            {
                question:
                    "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
                correctAns:
                    "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham giao thông ở phía bên phải và bên trái người điều khiển được đi tất cả các hướng.",
                image: "https://hoclaixemoto.com/image200/44.jpg",
                answers: [
                    "Người tham gia giao thông ở các hướng phải dừng lại.",
                    "Người tham gia giao thông ở các hướng được đi theo chiều gậy chỉ của cảnh sát giao thông.",
                    "Người tham gia giao thông ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
                    "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham giao thông ở phía bên phải và bên trái người điều khiển được đi tất cả các hướng.",
                ],
            },
            {
                question:
                    "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
                correctAns: "Cả ý 1 và ý 2.",
                answers: [
                    "Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe kia đi.",
                    "Xe xuống dốc phải nhường đường cho xe đang lên dốc; xe nào có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật đi trước.",
                    "Xe lên dốc phải nhường đường cho xe xuống dốc; xe nào không có chướng ngại vật phía trước phải nhường đường cho xe có chướng ngại vật đi trước.",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question:
                    "Người điều khiển xe mô tô hai bánh, xe gắn máy không được thực hiện những hành vi nào dưới đây?",
                correctAns:
                    "Đi vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính), đi xe dàn hàng ngang.",
                answers: [
                    "Đi vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính), đi xe dàn hàng ngang.",
                    "Chở 02 người; trong đó, có người bệnh đi cấp cứu hoặc trẻ em dưới 14 tuổi hoặc áp giải người có hành vi vi phạm pháp luật.",
                    "Điều khiển phương tiện tham gia giao thông trên đường tỉnh lộ hoặc quốc lộ.",
                ],
            },
            {
                question:
                    "Đường bộ trong khu vực đông dân cư gồm những đoạn đường nào dưới đây?",
                correctAns:
                    "Là đoạn đường bộ nằm trong khu vực nội thành phố, nội thị xã, nội thị trấn và những đoạn đường có đông dân cư sinh sống sát dọc theo đường, có các hoạt động ảnh hưởng đến an toàn giao thông; được xác định bằng biển báo hiệu là đường khu đông dân cư.",
                answers: [
                    "Là đoạn đường nằm trong khu công nghiệp có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới.",
                    "Là đoạn đường bộ nằm trong khu vực nội thành phố, nội thị xã, nội thị trấn và những đoạn đường có đông dân cư sinh sống sát dọc theo đường, có các hoạt động ảnh hưởng đến an toàn giao thông; được xác định bằng biển báo hiệu là đường khu đông dân cư.",
                    "Là đoạn đường nằm ngoài khu vực nội thành phố, nội thị xã có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới.",
                ],
            },
            {
                question:
                    "Tác dụng của mũ bảo hiểm đối với người ngồi trên xe mô tô hai bánh trong trường hợp xảy ra tai nạn giao thông là gì?",
                correctAns: "Để giảm thiểu chấn thương vùng đầu.",
                answers: [
                    "Để làm đẹp.",
                    "Để tránh mưa nắng.",
                    "Để giảm thiểu chấn thương vùng đầu.",
                    "Để các loại phương tiện khác dễ quan sát.",
                ],
            },
            {
                question:
                    "Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?",
                correctAns: "Cả ý 1 và ý 2.",
                answers: [
                    "Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông; là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.",
                    "Là ứng xử có văn hóa, có tình yêu thương con người trong các tình huống không may xảy ra khi tham gia giao thông.",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question:
                    "Khi điều khiển xe trên đường vòng người lái xe cần phải làm gì để đảm bảo an toàn?",
                correctAns:
                    "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốc để nhanh chóng qua đường vòng, đạp ly hợp (côn) và giảm tốc độ sau khi qua đường vòng.",
                answers: [
                    "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; giảm tốc độ tới mức cần thiết, về số thấp và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng.",
                    "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốc để nhanh chóng qua đường vòng, đạp ly hợp (côn) và giảm tốc độ sau khi qua đường vòng.",
                ],
            },
            {
                question:
                    "Kỹ thuật cơ bản để giữ thăng bằng khi điều khiển xe mô tô đi trên đường gồ ghề như thế nào trong các trường hợp dưới đây?",
                correctAns:
                    "Đứng thẳng trên giá gác chân lái sau đó hơi gập đầu gối và khuỷu tay, đi chậm để không nẩy quá mạnh.",
                answers: [
                    "Đứng thẳng trên giá gác chân lái sau đó hơi gập đầu gối và khuỷu tay, đi chậm để không nẩy quá mạnh.",
                    "Ngồi lùi lại phía sau, tăng ga vượt nhanh qua đoạn đường xóc.",
                    "Ngồi lệch sang bên trái hoặc bên phải để lấy thăng bằng qua đoạn đường gồ ghề.",
                ],
            },
            {
                question:
                    "Biển nào cấm các phương tiện giao thông đường bộ rẽ trái?",
                correctAns: "Biển 1 và 2.",
                image: "https://hoclaixemoto.com/image200/108.jpg",
                answers: ["Biển 1 và 2.", "Biển 1 và 3.", "Biển 2 và 3."],
            },
            {
                question: "Gặp biển nào xe xích lô được phép đi vào?",
                correctAns: "Biển 1 và biển 2.",
                image: "https://hoclaixemoto.com/image200/116.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Biển 1 và biển 2."],
            },
            {
                question:
                    "Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
                correctAns: "Biển 3",
                image: "https://hoclaixemoto.com/image200/124.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3"],
            },
            {
                question:
                    "Biển nào báo hiệu, chỉ dẫn xe đi trên đường này được quyền ưu tiên qua nơi giao nhau?",
                correctAns: "Biển 1 và 3.",
                image: "https://hoclaixemoto.com/image200/132.jpg",
                answers: [
                    "Biển 1 và 2.",
                    "Biển 1 và 3.",
                    "Biển 2 và 3.",
                    "Cả ba biển.",
                ],
            },
            {
                question: "Biển nào báo hiệu “Giao nhau với đường hai chiều”?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/140.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biên 3."],
            },
            {
                question: "Biển nào báo hiệu “Hướng đi thẳng phải theo”?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/148.jpg",
                answers: ["Biển 1.", "Biển 2."],
            },
            {
                question:
                    "Biển nào chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/156.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Cả ba biển."],
            },
            {
                question: "Khi gặp vạch kẻ đường nào các xe được phép đè vạch?",
                correctAns: "Vạch 1 và vạch 3.",
                image: "https://hoclaixemoto.com/image200/164.jpg",
                answers: ["Vạch 1.", "Vạch 2.", "Vạch 1 và vạch 3."],
            },
            {
                question:
                    "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                correctAns: "Xe khách, xe tải, mô tô, xe con.",
                image: "https://hoclaixemoto.com/image200/172.jpg",
                answers: [
                    "Xe khách, xe tải, mô tô, xe con.",
                    "Xe con, xe khách, xe tải, mô tô.",
                    "Mô tô, xe tải, xe khách, xe con.",
                    "Mô tô, xe tải, xe con, xe khách.",
                ],
            },
            {
                question: "Xe nào được quyền đi trước trong trường hợp này?",
                correctAns: "Mô tô.",
                image: "https://hoclaixemoto.com/image200/180.jpg",
                answers: ["Mô tô.", "Xe con."],
            },
            {
                question:
                    "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
                correctAns: "Xe con (E), mô tô (D).",
                image: "https://hoclaixemoto.com/image200/188.jpg",
                answers: [
                    "Xe con (B), mô tô (C).",
                    "Xe con (A), mô tô (C).",
                    "Xe con (E), mô tô (D).",
                    "Tất cả các loại xe trên.",
                ],
            },
            {
                question:
                    "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
                correctAns: "Xe con (E), mô tô (C).",
                image: "https://hoclaixemoto.com/image200/187.jpg",
                answers: [
                    "Xe con (E), mô tô (C).",
                    "Xe tải (A), mô tô (D)",
                    "Xe khách (B), mô tô (C).",
                    "Xe khách (B), mô tô (D).",
                ],
            },
        ],
    },
    {
        name: "Biển báo đường bộ",
        question: [
            {
                question:
                    "Người lái xe được hiểu như thế nào trong các khái niệm dưới đây?",
                correctAns: "Là người điều khiển xe cơ giới.",
                answers: [
                    "Là người điều khiển xe cơ giới.",
                    "Là người điều khiển xe thô sơ.",
                    "Là người điều khiển xe có súc vật kéo.",
                ],
            },
            {
                question:
                    "Trong các khái niệm dưới đây khái niệm “dừng xe” được hiểu như thế nào là đúng?",
                correctAns:
                    "Là trạng thái đứng yên tạm thời của phương tiện giao thông trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
                answers: [
                    "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian để cho người lên, xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
                    "Là trạng thái đứng yên tạm thời của phương tiện giao thông trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
                    "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian giữa 02 lần vận chuyển hàng hoá hoặc hành khách.",
                ],
            },
            {
                question:
                    "Người lái xe sử dụng đèn như thế nào khi lái xe trong khu đô thị và đông dân cư vào ban đêm?",
                correctAns: "Từ 5 giờ sáng đến 22 giờ tối.",
                answers: [
                    "Bất cứ đèn nào miễn là mắt nhìn rõ phía trước.",
                    "Chỉ bật đèn chiếu xa (đèn pha) khi không nhìn rõ đường.",
                    "Đèn chiếu xa (đèn pha) khi đường vắng, đèn pha chiếu gần (đèn cốt) khi có xe đi ngược chiều.",
                    "Đèn chiếu gần (đèn cốt).",
                ],
            },
            {
                question:
                    "Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?",
                correctAns: "Không được mang, vác.",
                answers: [
                    "Được mang, vác tuỳ trường hợp cụ thể.",
                    "Không được mang, vác.",
                    "Được mang, vác nhưng phải đảm bảo an toàn.",
                    "Được mang, vác tùy theo sức khỏe của bản thân.",
                ],
            },
            {
                question:
                    "Người có GPLX mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
                correctAns: "Xe mô tô có dung tích xi-lanh từ 175 cm3 trở lên.",
                answers: [
                    "Xe mô tô có dung tích xi-lanh 125 cm3",
                    "Xe mô tô có dung tích xi-lanh từ 175 cm3 trở lên.",
                    "Xe mô tô có dung tích xi-lanh 100 cm3.",
                ],
            },
            {
                question:
                    "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
                correctAns:
                    "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham giao thông ở phía bên phải và bên trái người điều khiển được đi tất cả các hướng.",
                image: "https://hoclaixemoto.com/image200/44.jpg",
                answers: [
                    "Người tham gia giao thông ở các hướng phải dừng lại.",
                    "Người tham gia giao thông ở các hướng được đi theo chiều gậy chỉ của cảnh sát giao thông.",
                    "Người tham gia giao thông ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
                    "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham giao thông ở phía bên phải và bên trái người điều khiển được đi tất cả các hướng.",
                ],
            },
            {
                question:
                    "Bạn đang lái xe trên đường hẹp, xuống dốc và gặp một xe đang đi lên dốc, bạn cần làm gì?",
                correctAns: "Nhường đường cho xe lên dốc.",
                answers: [
                    "Tiếp tục đi vì xe lên dốc phải nhường đường cho mình.",
                    "Nhường đường cho xe lên dốc.",
                    "Chỉ nhường đường khi xe lên dốc nháy đèn.",
                ],
            },
            {
                question:
                    "Người điều khiển xe mô tô hai bánh, xe gắn máy có được đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính) hay không?",
                correctAns:
                    "Đi vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính), đi xe dàn hàng ngang.",
                answers: [
                    "Được phép nhưng phải đảm bảo an toàn.",
                    "Không được phép.",
                    "Được phép tùy từng hoàn cảnh, điều kiện cụ thể.",
                ],
            },
            {
                question:
                    "Tốc độ tối đa cho phép đối với xe máy chuyên dùng, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự trên đường bộ (trừ đường cao tốc) không được vượt quá bao nhiêu km/h?",
                correctAns: "2-40 km/h.",
                answers: ["1-50 km/h.", "2-40 km/h.", "3-60 km/h."],
            },
            {
                question:
                    "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải xử lý như thế nào là đúng quy tắc giao thông?",
                correctAns:
                    "Nhường đường cho xe đi trên đường ưu tiên từ bất kỳ hướng nào tới.",
                answers: [
                    "Tăng tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
                    "Giảm tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
                    "Nhường đường cho xe đi trên đường ưu tiên từ bất kỳ hướng nào tới.",
                ],
            },
            {
                question:
                    "Trong các hành vi dưới đây, người lái xe mô tô có văn hóa giao thông phải ứng xử như thế nào?",
                correctAns:
                    "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đạt chuẩn, cài quai đúng quy cách.",
                answers: [
                    "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đạt chuẩn, cài quai đúng quy cách.",
                    "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông.",
                    "Điều khiển xe và đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
                ],
            },
            {
                question:
                    "Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?",
                correctAns:
                    "Giảm hết ga; sử dụng đồng thời cả phanh sau và phanh trước.",
                answers: [
                    "Sử dụng phanh trước.",
                    "Sử dụng phanh sau.",
                    "Giảm hết ga; sử dụng đồng thời cả phanh sau và phanh trước.",
                ],
            },
            {
                question: "Biển nào dưới đây xe gắn máy được phép đi vào?",
                correctAns: "Cả 2 biển",
                image: "https://hoclaixemoto.com/image200/101.jpg",
                answers: ["Biển 1.", "Biển 2.", "Cả 2 biển."],
            },
            {
                question: "Biển nào cho phép xe rẽ trái?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/109.jpg",
                answers: ["Biển 1.", "Biển 2.", "Không biển nào."],
            },
            {
                question:
                    "Gặp biển nào xe lam, xe xích lô máy được phép đi vào?",
                correctAns: "Biển 3.",
                image: "https://hoclaixemoto.com/image200/117.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3."],
            },
            {
                question: "Biển nào báo hiệu “Đường dành cho xe thô sơ”?",
                correctAns: "Biển 1",
                image: "https://hoclaixemoto.com/image200/125.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3"],
            },
            {
                question:
                    "Biển nào báo hiệu “Giao nhau với đường không ưu tiên”?",
                correctAns: "Biển 1 và 3.",
                image: "https://hoclaixemoto.com/image200/133.jpg",
                answers: ["Biển 1.", "Biển 2", "Biển 3.", "Biển 2 và 3."],
            },
            {
                question: "Biển nào báo hiệu “Đường hai chiều”?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/141.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biên 3."],
            },
            {
                question: "Biển nào báo hiệu “Đường một chiều”?",
                correctAns: "Biển 2",
                image: "https://hoclaixemoto.com/image200/149.jpg",
                answers: ["Biển 1.", "Biển 2.", "Cả hai biển."],
            },
            {
                question:
                    "Biển nào chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường?",
                correctAns: "Biển 2",
                image: "https://hoclaixemoto.com/image200/156.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Cả ba biển."],
            },
            {
                question:
                    "Biển nào báo hiệu “Nơi đỗ xe dành cho người tàn tật”?",
                correctAns: "Vạch 1 và vạch 3.",
                image: "https://hoclaixemoto.com/image200/157.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3."],
            },
            {
                question:
                    "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/172.jpg",
                answers: [
                    "Xe khách, xe tải, mô tô, xe con.",
                    "Xe con, xe khách, xe tải, mô tô.",
                    "Mô tô, xe tải, xe khách, xe con.",
                    "Mô tô, xe tải, xe con, xe khách.",
                ],
            },
            {
                question: "Vạch dưới đây có ý nghĩa gì?",
                correctAns: "Mô tô.",
                image: "https://hoclaixemoto.com/image200/165.jpg",
                answers: [
                    "Vị trí dừng xe của các phương tiện vận tải hành khách công cộng.",
                    "Báo cho người điều khiển được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
                    "Dùng để xác định vị trí giữa các phương tiện trên đường.",
                ],
            },
            {
                question:
                    "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
                correctAns: "Xe tải.",
                image: "https://hoclaixemoto.com/image200/173.jpg",
                answers: [
                    "Xe tải.",
                    "Xe con và mô tô.",
                    "Cả ba xe.",
                    "Xe con và xe tải.",
                ],
            },
            {
                question: "Xe nào vi phạm quy tắc giao thông?",
                correctAns: "Xe con.",
                image: "https://hoclaixemoto.com/image200/181.jpg",
                answers: ["Xe khách.", "Mô tô.", "Xe con.", "Xe con và mô tô."],
            },
        ],
    },
    {
        name: "Sa hình",
        question: [
            {
                question:
                    "Người lái xe được hiểu như thế nào trong các khái niệm dưới đây?",
                correctAns: "Là người điều khiển xe cơ giới.",
                answers: [
                    "Là người điều khiển xe cơ giới.",
                    "Là người điều khiển xe thô sơ.",
                    "Là người điều khiển xe có súc vật kéo.",
                ],
            },
            {
                question:
                    "Trong các khái niệm dưới đây khái niệm “dừng xe” được hiểu như thế nào là đúng?",
                correctAns:
                    "Là trạng thái đứng yên tạm thời của phương tiện giao thông trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
                answers: [
                    "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian để cho người lên, xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
                    "Là trạng thái đứng yên tạm thời của phương tiện giao thông trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
                    "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian giữa 02 lần vận chuyển hàng hoá hoặc hành khách.",
                ],
            },
            {
                question:
                    "Người lái xe sử dụng đèn như thế nào khi lái xe trong khu đô thị và đông dân cư vào ban đêm?",
                correctAns: "Từ 5 giờ sáng đến 22 giờ tối.",
                answers: [
                    "Bất cứ đèn nào miễn là mắt nhìn rõ phía trước.",
                    "Chỉ bật đèn chiếu xa (đèn pha) khi không nhìn rõ đường.",
                    "Đèn chiếu xa (đèn pha) khi đường vắng, đèn pha chiếu gần (đèn cốt) khi có xe đi ngược chiều.",
                    "Đèn chiếu gần (đèn cốt).",
                ],
            },
            {
                question:
                    "Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?",
                correctAns: "Không được mang, vác.",
                answers: [
                    "Được mang, vác tuỳ trường hợp cụ thể.",
                    "Không được mang, vác.",
                    "Được mang, vác nhưng phải đảm bảo an toàn.",
                    "Được mang, vác tùy theo sức khỏe của bản thân.",
                ],
            },
            {
                question:
                    "Người có GPLX mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
                correctAns: "Xe gắn máy có dung tích xi-lanh dưới 50 cm3.",
                answers: [
                    "Xe mô tô có dung tích xi-lanh 125 cm3",
                    "Xe mô tô có dung tích xi-lanh từ 175 cm3 trở lên.",
                    "Xe mô tô có dung tích xi-lanh 100 cm3.",
                ],
            },
            {
                question:
                    "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
                correctAns:
                    "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham giao thông ở phía bên phải và bên trái người điều khiển được đi tất cả các hướng.",
                image: "https://hoclaixemoto.com/image200/44.jpg",
                answers: [
                    "Người tham gia giao thông ở các hướng phải dừng lại.",
                    "Người tham gia giao thông ở các hướng được đi theo chiều gậy chỉ của cảnh sát giao thông.",
                    "Người tham gia giao thông ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
                    "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham giao thông ở phía bên phải và bên trái người điều khiển được đi tất cả các hướng.",
                ],
            },
            {
                question:
                    "Bạn đang lái xe trên đường hẹp, xuống dốc và gặp một xe đang đi lên dốc, bạn cần làm gì?",
                correctAns: "Nhường đường cho xe lên dốc.",
                answers: [
                    "Tiếp tục đi vì xe lên dốc phải nhường đường cho mình.",
                    "Nhường đường cho xe lên dốc.",
                    "Chỉ nhường đường khi xe lên dốc nháy đèn.",
                ],
            },
            {
                question:
                    "Người điều khiển xe mô tô hai bánh, xe gắn máy có được đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính) hay không?",
                correctAns:
                    "Đi vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính), đi xe dàn hàng ngang.",
                answers: [
                    "Được phép nhưng phải đảm bảo an toàn.",
                    "Không được phép.",
                    "Được phép tùy từng hoàn cảnh, điều kiện cụ thể.",
                ],
            },
            {
                question:
                    "Tốc độ tối đa cho phép đối với xe máy chuyên dùng, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự trên đường bộ (trừ đường cao tốc) không được vượt quá bao nhiêu km/h?",
                correctAns: "2-40 km/h.",
                answers: ["1-50 km/h.", "2-40 km/h.", "3-60 km/h."],
            },
            {
                question:
                    "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải xử lý như thế nào là đúng quy tắc giao thông?",
                correctAns:
                    "Nhường đường cho xe đi trên đường ưu tiên từ bất kỳ hướng nào tới.",
                answers: [
                    "Tăng tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
                    "Giảm tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
                    "Nhường đường cho xe đi trên đường ưu tiên từ bất kỳ hướng nào tới.",
                ],
            },
            {
                question:
                    "Trong các hành vi dưới đây, người lái xe mô tô có văn hóa giao thông phải ứng xử như thế nào?",
                correctAns:
                    "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đạt chuẩn, cài quai đúng quy cách.",
                answers: [
                    "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đạt chuẩn, cài quai đúng quy cách.",
                    "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông.",
                    "Điều khiển xe và đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
                ],
            },
            {
                question:
                    "Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?",
                correctAns:
                    "Giảm hết ga; sử dụng đồng thời cả phanh sau và phanh trước.",
                answers: [
                    "Sử dụng phanh trước.",
                    "Sử dụng phanh sau.",
                    "Giảm hết ga; sử dụng đồng thời cả phanh sau và phanh trước.",
                ],
            },
            {
                question: "Biển nào dưới đây xe gắn máy được phép đi vào?",
                correctAns: "Cả 2 biển",
                image: "https://hoclaixemoto.com/image200/101.jpg",
                answers: ["Biển 1.", "Biển 2.", "Cả 2 biển."],
            },
            {
                question: "Biển nào cho phép xe rẽ trái?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/109.jpg",
                answers: ["Biển 1.", "Biển 2.", "Không biển nào."],
            },
            {
                question:
                    "Gặp biển nào xe lam, xe xích lô máy được phép đi vào?",
                correctAns: "Biển 3.",
                image: "https://hoclaixemoto.com/image200/117.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3."],
            },
            {
                question: "Biển nào báo hiệu “Đường dành cho xe thô sơ”?",
                correctAns: "Biển 1",
                image: "https://hoclaixemoto.com/image200/125.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3"],
            },
            {
                question:
                    "Biển nào báo hiệu “Giao nhau với đường không ưu tiên”?",
                correctAns: "Biển 1 và 3.",
                image: "https://hoclaixemoto.com/image200/133.jpg",
                answers: ["Biển 1.", "Biển 2", "Biển 3.", "Biển 2 và 3."],
            },
            {
                question: "Biển nào báo hiệu “Đường hai chiều”?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/141.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biên 3."],
            },
            {
                question: "Biển nào báo hiệu “Đường một chiều”?",
                correctAns: "Biển 2",
                image: "https://hoclaixemoto.com/image200/149.jpg",
                answers: ["Biển 1.", "Biển 2.", "Cả hai biển."],
            },
            {
                question:
                    "Biển nào chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường?",
                correctAns: "Biển 2",
                image: "https://hoclaixemoto.com/image200/156.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Cả ba biển."],
            },
            {
                question:
                    "Biển nào báo hiệu “Nơi đỗ xe dành cho người tàn tật”?",
                correctAns: "Vạch 1 và vạch 3.",
                image: "https://hoclaixemoto.com/image200/157.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3."],
            },
            {
                question:
                    "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/172.jpg",
                answers: [
                    "Xe khách, xe tải, mô tô, xe con.",
                    "Xe con, xe khách, xe tải, mô tô.",
                    "Mô tô, xe tải, xe khách, xe con.",
                    "Mô tô, xe tải, xe con, xe khách.",
                ],
            },
            {
                question: "Vạch dưới đây có ý nghĩa gì?",
                correctAns: "Mô tô.",
                image: "https://hoclaixemoto.com/image200/165.jpg",
                answers: [
                    "Vị trí dừng xe của các phương tiện vận tải hành khách công cộng.",
                    "Báo cho người điều khiển được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
                    "Dùng để xác định vị trí giữa các phương tiện trên đường.",
                ],
            },
            {
                question:
                    "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
                correctAns: "Xe tải.",
                image: "https://hoclaixemoto.com/image200/173.jpg",
                answers: [
                    "Xe tải.",
                    "Xe con và mô tô.",
                    "Cả ba xe.",
                    "Xe con và xe tải.",
                ],
            },
            {
                question: "Xe nào vi phạm quy tắc giao thông?",
                correctAns: "Xe con.",
                image: "https://hoclaixemoto.com/image200/181.jpg",
                answers: ["Xe khách.", "Mô tô.", "Xe con.", "Xe con và mô tô."],
            },
        ],
    },
    {
        name: "Bộ đề tổng hợp 1",
        question: [
            {
                question:
                    "Khái niệm “phương tiện giao thông cơ giới đường bộ” được hiểu thế nào là đúng?",
                correctAns:
                    "Gồm xe ô tô; máy kéo; rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo; xe mô tô hai bánh; xe mô tô ba bánh, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự.",
                answers: [
                    "Gồm xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
                    "Gồm xe ô tô; máy kéo; rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo; xe mô tô hai bánh; xe mô tô ba bánh, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự.",
                ],
            },
            {
                question: "Được cơ quan có thẩm quyền cấp phép.",
                correctAns:
                    "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian.",
                answers: [
                    "Diễn ra trên đường phố không có người qua lại.",
                    "Được người dân ủng hộ.",
                    "Được cơ quan có thẩm quyền cấp phép.",
                ],
            },
            {
                question:
                    "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt có được quay đầu xe hay không?",
                correctAns: "Không được phép.",
                answers: [
                    "Được phép.",
                    "Không được phép.",
                    "Tùy từng trường hợp.",
                ],
            },
            {
                question:
                    "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được bám, kéo hoặc đẩy các phương tiện khác không?",
                correctAns: "Không được phép.",
                answers: [
                    "Được phép.",
                    "Được bám trong trường hợp phương tiện của mình bị hỏng.",
                    "Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng.",
                    "Không được phép.",
                ],
            },
            {
                question:
                    "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được sử dụng ô khi trời mưa hay không?",
                correctAns: "Không được sử dụng.",
                answers: [
                    "Được sử dụng.",
                    "Chỉ người ngồi sau được sử dụng.",
                    "Không được sử dụng.",
                    "Được sử dụng nếu không có áo mưa.",
                ],
            },
            {
                question:
                    "Biển báo hiệu có dạng hình tròn, viền đỏ, nền trắng, trên nền có hình vẽ hoặc chữ số, chữ viết màu đen là loại biển gì dưới đây?",
                correctAns: "Biển báo cấm.",
                image: "https://hoclaixemoto.com/image200/39.jpg",
                answers: [
                    "Biển báo nguy hiểm.",
                    "Biển báo cấm.",
                    "Biển báo hiệu lệnh.",
                    "Biển báo chỉ dẫn.",
                ],
            },
            {
                question:
                    "Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi như thế nào?",
                correctAns:
                    "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn phải có tín hiệu báo trước và phải bảo đảm an toàn.",
                answers: [
                    "Cho xe đi trên bất kỳ làn đường nào hoặc giữa 02 làn đường nếu không có xe phía trước; khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn.",
                    "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn phải có tín hiệu báo trước và phải bảo đảm an toàn.",
                    "Phải cho xe đi trong một làn đường, khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn.",
                ],
            },
            {
                question:
                    "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
                correctAns: "Phải nhường đường cho xe đi đến từ bên phải.",
                answers: [
                    "Phải nhường đường cho xe đi đến từ bên phải.",
                    "Xe báo hiệu xin đường trước xe đó được đi trước.",
                    "Phải nhường đường cho xe đi đến từ bên trái.",
                ],
            },
            {
                question:
                    "Tại ngã ba hoặc ngã tư không có đảo an toàn, người lái xe phải nhường đường như thế nào là đúng trong các trường hợp dưới đây?",
                correctAns:
                    "Nhường đường cho người đi bộ đang đi trên phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ưu tiên, đường chính từ bất kỳ hướng nào tới; nhường đường cho xe ưu tiên, xe đi từ bên phải đến.",
                answers: [
                    "Nhường đường cho người đi bộ đang đi trên phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ưu tiên, đường chính từ bất kỳ hướng nào tới; nhường đường cho xe ưu tiên, xe đi từ bên phải đến.",
                    "Nhường đường cho người đi bộ đang đứng chờ đi qua phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ngược chiều, đường nhánh từ bất kỳ hướng nào tới; nhường đường cho xe đi từ bên trái đến",
                    "Không phải nhường đường.",
                ],
            },
            {
                question:
                    "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều không có dải phân cách giữa, xe mô tô hai bánh, ô tô chở người đến 30 chỗ tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
                correctAns: "2-50 km/h.",
                answers: ["1-60 km/h.", "2-50 km/h.", "3-40 km/h."],
            },
            {
                question:
                    "Theo Luật Giao thông đường bộ, tín hiệu đèn giao thông gồm 3 màu nào dưới đây?",
                correctAns: "Đỏ - Vàng - Xanh.",
                answers: [
                    "Đỏ - Vàng - Xanh.",
                    "Cam - Vàng - Xanh.",
                    "Vàng - Xanh dương - Xanh lá.",
                    "Đỏ - Cam - Xanh.",
                ],
            },
            {
                question:
                    "Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga tham gia giao thông dễ gây tai nạn nguy hiểm?",
                correctAns: "Chỉ sử dụng phanh trước.",
                answers: [
                    "Sử dụng còi.",
                    "Phanh đồng thời cả phanh trước và phanh sau.",
                    "Chỉ sử dụng phanh trước.",
                ],
            },
            {
                question: "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
                correctAns: "Biển 2 và 3.",
                image: "https://hoclaixemoto.com/image200/103.jpg",
                answers: [
                    "Không biển nào.",
                    "Biển 1 và 2.",
                    "Biển 2 và 3.",
                    "Cả 3 biển.",
                ],
            },
            {
                question:
                    "Biển nào xe được phép quay đầu nhưng không được rẽ trái?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/111.jpg",
                answers: ["Biển 1.", "Biển 2.", "Cả hai biển."],
            },
            {
                question:
                    "Chiều dài đoạn đường 500 m từ nơi đặt biển này, người lái xe có được phép bấm còi không?",
                correctAns: "Không được phép.",
                image: "https://hoclaixemoto.com/image200/119.jpg",
                answers: ["Được phép.", "Không được phép."],
            },
            {
                question:
                    "Biển nào báo hiệu “Giao nhau với đường sắt có rào chắn”?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/127.jpg",
                answers: ["Biển 1.", "Biển 2 và 3.", "Biển 3"],
            },
            {
                question: "Biển nào báo hiệu “Đường bị thu hẹp”?",
                correctAns: "Biển 1 và 2.",
                image: "https://hoclaixemoto.com/image200/135.jpg",
                answers: [
                    "Biển 1 và 2.",
                    "Biển 1 và 3.",
                    "Biển 2 và 3.",
                    "Cả ba biển.",
                ],
            },
            {
                question: "Biển nào báo hiệu “Chú ý chướng ngại vật”?",
                correctAns: "Biển 2 và 3.",
                image: "https://hoclaixemoto.com/image200/143.jpg",
                answers: ["Biển 1.", "Biển 2 và 3.", "Biên 3."],
            },
            {
                question:
                    "Hiệu lực của biển “Tốc độ tối đa cho phép” hết tác dụng khi gặp biển nào dưới đây?",
                correctAns: "Biển 1 và 2.",
                image: "https://hoclaixemoto.com/image200/151.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Biển 1 và 2."],
            },
            {
                question: "Biển số 1 có ý nghĩa gì?",
                correctAns: "Báo hiệu cầu vượt liên thông.",
                image: "https://hoclaixemoto.com/image200/159.jpg",
                answers: [
                    "Đi thẳng hoặc rẽ trái trên cầu vượt.",
                    "Đi thẳng hoặc rẽ phải trên cầu vượt.",
                    "Báo hiệu cầu vượt liên thông.",
                ],
            },
            {
                question:
                    "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                correctAns: "Mô tô, xe con, xe tải.",
                image: "https://hoclaixemoto.com/image200/167.jpg",
                answers: [
                    "Xe tải, xe con, mô tô.",
                    "Xe con, xe tải, mô tô.",
                    "Mô tô, xe con, xe tải.",
                    "Xe con, mô tô, xe tải.",
                ],
            },
            {
                question: "Xe nào đỗ vi phạm quy tắc giao thông?",
                correctAns: "Cả hai xe.",
                image: "https://hoclaixemoto.com/image200/175.jpg",
                answers: [
                    "Cả hai xe.",
                    "Không xe nào vi phạm.",
                    "Chỉ xe mô tô vi phạm.",
                    "Chỉ xe tải vi phạm.",
                ],
            },
            {
                question: "Theo hướng mũi tên, xe nào được phép đi?",
                correctAns: "Mô tô, xe tải.",
                image: "https://hoclaixemoto.com/image200/183.jpg",
                answers: [
                    "Mô tô, xe con.",
                    "Xe con, xe tải.",
                    "Mô tô, xe tải.",
                    "Cả ba xe.",
                ],
            },
            {
                question:
                    "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                correctAns: "Xe con.",
                image: "https://hoclaixemoto.com/image200/191.jpg",
                answers: ["Xe con.", "Xe tải.", "Xe con, xe tải."],
            },
            {
                question:
                    "Xe của bạn đang di chuyển gần đến khu vực giao cắt với đường sắt, khi rào chắn đang dịch chuyển, bạn điều khiển xe như thế nào là đứng quy tắc giao thông?",
                correctAns: "Dừng lại trước rào chắn một khoảng cách an toàn.",
                image: "https://hoclaixemoto.com/image200/199.jpg",
                answers: [
                    "Quan sát nếu thấy không có tầu thì tăng tốc cho xe vượt qua đường sắt.",
                    "Dừng lại trước rào chắn một khoảng cách an toàn.",
                    "Ra tín hiệu, yêu cầu người gác chắn tàu kéo chậm Barie để xe bạn qua.",
                ],
            },
        ],
    },
    {
        name: "Bộ đề tổng hợp 2",
        question: [
            {
                question:
                    "Khái niệm “phương tiện giao thông thô sơ đường bộ” được hiểu thế nào là đúng?",
                correctAns:
                    "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe xích lô, xe lăn dùng cho người khuyết tật, xe súc vật kéo và các loại xe tương tự.",
                answers: [
                    "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe xích lô, xe lăn dùng cho người khuyết tật, xe súc vật kéo và các loại xe tương tự.",
                    "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
                    "Gồm xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo.",
                ],
            },
            {
                question:
                    "Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma tuý có bị nghiêm cấm hay không?",
                correctAns: "Bị nghiêm cấm.",
                answers: [
                    "Bị nghiêm cấm.",
                    "Không bị nghiêm cấm.",
                    "Không bị nghiêm cấm, nếu có chất ma tuý ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông.",
                ],
            },
            {
                question:
                    "Bạn đang lái xe phía trước có một xe cảnh sát giao thông không phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
                correctAns: "Được vượt khi đảm bảo an toàn.",
                answers: [
                    "Không được vượt.",
                    "Được vượt khi đang đi trên cầu.",
                    "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
                    "Được vượt khi đảm bảo an toàn.",
                ],
            },
            {
                question:
                    "Khi đang lên dốc người ngồi trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?",
                correctAns: "Không được phép.",
                answers: [
                    "Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
                    "Không được phép.",
                    "Chỉ được thực hiện trên đường thật vắng.",
                    "Chỉ được phép khi người đi xe đạp đã quá mệt.",
                ],
            },
            {
                question:
                    "Biển báo hiệu có dạng tam giác đều, viền đỏ, viền màu vàng, trên có hình vẽ màu đen là loại biển gì dưới đây?",
                correctAns: "Biển báo nguy hiểm.",
                answers: [
                    "Biển báo nguy hiểm.",
                    "Biển báo cấm.",
                    "Biển báo hiệu lệnh.",
                    "Biển báo chỉ dẫn.",
                ],
            },
            {
                question:
                    "Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ và xe cơ giới phải đi như thế nào là đúng quy tắc giao thông?",
                correctAns:
                    "Xe thô sơ phải đi trên làn đường bên phải trong cùng; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái",
                answers: [
                    "Xe thô sơ phải đi trên làn đường bên trái trong cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải.",
                    "Xe thô sơ phải đi trên làn đường bên phải trong cùng; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái",
                    "Xe thô sơ đi trên làn đường phù hợp không gây cản trở giao thông, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải.",
                ],
            },
            {
                question:
                    "Tại nơi đường bộ giao nhau cùng mức với đường sắt chỉ có đèn tín hiệu hoặc chuông báo hiệu, khi đèn tín hiệu màu đỏ đã bật sáng hoặc có tiếng chuông báo hiệu, người tham gia giao thông phải dừng lại ngay và giữ khoảng cách tối thiểu bao nhiêu mét tính từ ray gần nhất?",
                correctAns: "1-5 mét.",
                answers: ["1-5 mét.", "2-3 mét.", "3-4 mét."],
            },
            {
                question:
                    "Khi điều khiển xe cơ giới, người lái xe phải bật đèn tín hiệu báo rẽ trong trường hợp nào sau đây?",
                correctAns: "Trước khi thay đổi làn đường.",
                answers: [
                    "Khi cho xe chạy thẳng.",
                    "Trước khi thay đổi làn đường.",
                    "Sau khi thay đổi làn đường.",
                ],
            },
            {
                question:
                    "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 50 km/h?",
                correctAns: "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.",
                answers: [
                    "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.",
                    "Xe gắn máy, xe máy chuyên dùng.",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question:
                    "Tại nơi giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?",
                correctAns: "Cả ý 1 và ý 2.",
                answers: [
                    "Phải cho xe dừng lại trước vạch dừng, trường hợp đã đi quá vạch dừng hoặc đã quá gần vạch dừng nếu dừng lại thấy nguy hiểm thì được đi tiếp.",
                    "Trong trường hợp tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ chú ý quan sát nhường đường cho người đi bộ qua đường",
                    "Cả ý 1 và ý 2.",
                ],
            },
            {
                question:
                    "Trên đường đang xảy ra ùn tắc những hành vi nào sau đây là thiếu văn hóa khi tham gia giao thông?",
                correctAns: "Tất cả các ý nêu trên.",
                answers: [
                    "Bấm còi liên tục thúc giục các phương tiện phía trước nhường đường.",
                    "Đi lên vỉa hè, tận dùng mọi khoảng trống để nhanh chóng thoát khỏi nơi ùn tắc.",
                    "Lấn sang trái đường cố gắng vượt lên xe khác.",
                    "Tất cả các ý nêu trên.",
                ],
            },
            {
                question: "Biển nào cấm quay đầu xe?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/104.jpg",
                answers: ["Biển 1.", "Biển 2.", "Không biển nào."],
            },
            {
                question: "Biển nào là biển “Cấm đi ngược chiều”?",
                correctAns: "Cả 3 biển.",
                image: "https://hoclaixemoto.com/image200/112.jpg",
                answers: ["Biển 1.", "Biển 2.", "Cả 3 biển."],
            },
            {
                question: "Biển nào xe mô tô hai bánh được đi vào?",
                correctAns: "Biển 1 và 3.",
                image: "https://hoclaixemoto.com/image200/120.jpg",
                answers: ["Biển 1 và 2.", "Biển 1 và 3.", "Biển 2 và 3."],
            },
            {
                question:
                    "Biển nào báo hiệu nguy hiểm giao nhau với đường sắt?",
                correctAns: "Biển 1 và 3.",
                image: "https://hoclaixemoto.com/image200/128.jpg",
                answers: ["Biển 1 và 2.", "Biển 1 và 3.", "Biển 2 và 3."],
            },
            {
                question:
                    "Biển nào báo hiệu “Giao nhau với đường sắt có rào chắn”?",
                correctAns: "Biển 1.",
                image: "https://hoclaixemoto.com/image200/127.jpg",
                answers: ["Biển 1.", "Biển 2 và 3.", "Biển 3"],
            },
            {
                question:
                    "Khi gặp biển nào, người lái xe phải giảm tốc độ, chú ý xe đi ngược chiều, xe đi ở phía đường bị hẹp phải nhường đường cho xe đi ngược chiều?",
                correctAns: "Biển 2 và 3.",
                image: "https://hoclaixemoto.com/image200/136.jpg",
                answers: [
                    "Biển 1.",
                    "Biển 1 và 3.",
                    "Biển 2 và 3.",
                    "Cả ba biển.",
                ],
            },
            {
                question:
                    "Gặp biển nào người tham gia giao thông phải đi chậm và thận trọng đề phòng khả năng xuất hiện và di chuyển bất ngờ của trẻ em trên mặt đường?",
                correctAns: "Biển 2.",
                image: "https://hoclaixemoto.com/image200/144.jpg",
                answers: ["Biển 1.", "Biển 2."],
            },
            {
                question:
                    "Trong các biển dưới đây biển nào là biển “Hết hạn chế tốc độ tối thiểu” ?",
                correctAns: "Biển 3.",
                image: "https://hoclaixemoto.com/image200/152.jpg",
                answers: ["Biển 1.", "Biển 2.", "Biển 3.", "Cả ba biển."],
            },
            {
                question:
                    "Vạch kẻ đường nào dưới đây là vạch phân chia các làn xe cùng chiều?",
                correctAns: "Vạch 1 và 2.",
                image: "https://hoclaixemoto.com/image200/160.jpg",
                answers: ["Vạch 1.", "Vạch 2.", "Vạch 1 và 2."],
            },
            {
                question:
                    "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                correctAns: "Mô tô, xe con, xe tải.",
                image: "https://hoclaixemoto.com/image200/167.jpg",
                answers: [
                    "Xe tải, xe con, mô tô.",
                    "Xe con, xe tải, mô tô.",
                    "Mô tô, xe con, xe tải.",
                    "Xe con, mô tô, xe tải.",
                ],
            },
            {
                question: "Trường hợp này xe nào được quyền đi trước?",
                correctAns: "Xe con.",
                image: "https://hoclaixemoto.com/image200/168.jpg",
                answers: ["Mô tô.", "Xe con."],
            },
            {
                question: "Xe nào đỗ vi phạm quy tắc giao thông?",
                correctAns: "Cả ba xe.",
                image: "https://hoclaixemoto.com/image200/176.jpg",
                answers: [
                    "Chỉ mô tô.",
                    "Chỉ xe tải.",
                    "Cả ba xe.",
                    "Chỉ mô tô và xe tải.",
                ],
            },
            {
                question:
                    "Trong hình dưới đây, xe nào chấp hành đúng quy tắc giao thông?",
                correctAns: "Tất cả các loại xe trên.",
                image: "https://hoclaixemoto.com/image200/184.jpg",
                answers: [
                    "Chỉ xe khách, mô tô.",
                    "Tất cả các loại xe trên.",
                    "Không xe nào chấp hành đúng quy tắc giao thông",
                ],
            },
            {
                question:
                    "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                correctAns: "Xe khách, xe tải.",
                image: "https://hoclaixemoto.com/image200/192.jpg",
                answers: [
                    "Xe tải, xe con.",
                    "Xe khách, xe con.",
                    "Xe khách, xe tải.",
                ],
            },
        ],
    },
];



export default data;
