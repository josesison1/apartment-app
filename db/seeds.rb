# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

apartments = [
    {
        street: "123 Street Ln.",
        city: "San Diego",
        state: "CA.",
        manager: "Larry Fitz",
        email: "Larryfitz@yahoo.com",
        price: "$2000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "Allowed",
        image: "https://images1.apartments.com/i2/V3o3tvUkAUIJOm0TLpdNvEG1aLNOHio_P7tb8QiXUJo/117/one-paseo-living-san-diego-ca-building-photo.jpg"
    },
    {
        street: "456 Street Ln.",
        city: "San Diego",
        state: "CA.",
        manager: "Mary Fitz",
        email: "Maryfitz@yahoo.com",
        price: "$5000",
        bedrooms: 4,
        bathrooms: 3,
        pets: "Allowed",
        image: "https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_900,w_2000/v1591200513/g5/g5-c-5m5d9vuh1-harbor-group-international-single-domain-client/g5-cl-1kcwgs6q0w-luxe-scottsdale-apartments/uploads/Luxe_44_slu2ag.jpg"
    },
    {
        street: "789 Street Ln.",
        city: "San Diego",
        state: "CA.",
        manager: "Harry Fitz",
        email: "Harryfitz@yahoo.com",
        price: "$10000",
        bedrooms: 8,
        bathrooms: 5,
        pets: "Allowed",
        image: "https://photos.zillowstatic.com/fp/6d593145ee4fd51f6b79d267823bf0c6-p_e.jpg"
    }
]



user1 = User.find 1

apartments.each do |val|
    user1.apartments.create val
end

