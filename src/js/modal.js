$(document).ready(function() {

	// Функция открытия модального окна

	$(".modal-link").on("click", function() {

		$('.modal-overlay[data-modal="'+$(this).data('modal')+'"]').addClass("modal-overlay_visible");

	});

	// Функция закрытия модального окна нажатием на кнопку

	$(".modal__close").on("click", function() {

		$(".modal-overlay").removeClass("modal-overlay_visible");

	});

	// Функция закрытия модального окна нажатием вне окна

	$(document).on("click", function(e) {
	
		if($(".modal-overlay_visible").length) {
		
			// Если есть открытое окно

			if(!$(e.target).closest(".modal").length && !$(e.target).closest(".modal-link").length) {
			
				// Если нажали вне его контента и не на ссылку вызова

				$(".modal-overlay").removeClass("modal-overlay_visible");

			}
			
		}

	});

});