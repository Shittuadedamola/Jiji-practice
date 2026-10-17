var datas;

const jiji = async () => {
    const apiUrl = "https://api.escuelajs.co/api/v1/products";

    try {
        const response = await fetch(apiUrl)
        datas = await response.json();

        const products = document.getElementById("products");

        products.innerHTML = datas.map((data) => {
            return `
                <div class="bg-white rounded-2xl shadow-sm overflow-hidden group cursor-pointer">
                    <div class="relative mb-3">
                        <div class="absolute flex items-center gap-2
                                    text-blue-600 bg-blue-200 p-3
                                    rounded-full top-3 right-3">
                            <i class="fa-solid fa-user-check text-[10px]"></i>
                            <span class="text-[10px]">Verified ID</span>
                        </div>

                        <img
                            src="${data.images?.[0] || 'images/placeholder.jpg'}"
                            alt="${data.title}"
                            class="w-full h-48 object-cover rounded-t-2xl"
                        >
                    </div>

                    <p class="text-green-500 font-bold m-3 group-hover:underline">
                        $ <span>${data.price}</span>
                    </p>

                    <p class="m-3 group-hover:underline">
                        ${data.title}
                    </p>
                </div>
            `;
        }).join("");
    } catch (error) {
        console.log(error.message)
    }
};

jiji();