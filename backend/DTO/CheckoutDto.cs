// CheckoutDto.cs

namespace YourProject.Dtos
{
    public class CheckoutDto
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        // Add more properties as needed
        public string Token { get; set; } // Token generated by Stripe.js
    }
}
