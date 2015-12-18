namespace MyStartUpMate
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    

    public partial class User
    {
        //[PlaceHolder("FirstName")]
        [Display(Name = "First Name")]
        [Required(ErrorMessage ="Please Provide First Name",AllowEmptyStrings =false)]
        [StringLength(50)]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Please Provide Last Name",AllowEmptyStrings =false)]
        [StringLength(50)]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Please Provide Last Name", AllowEmptyStrings = false)]
        [DataType(System.ComponentModel.DataAnnotations.DataType.Password)]
        [StringLength(50,MinimumLength =8,ErrorMessage ="Password must be 8 char long. ")]
        public string Password { get; set; }

        [Compare("Password", ErrorMessage = "Confirm password does not match. ")]
        [DataType(System.ComponentModel.DataAnnotations.DataType.Password)]
        public string ConfirmPassword { get; set; }

        [Required(ErrorMessage = "Please Provide Email Address", AllowEmptyStrings = false)]
        [StringLength(50)]
        [RegularExpression(@"\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z",ErrorMessage ="Please provide a valid email id")]
        public string Email { get; set; }

        [Required(ErrorMessage ="Please provide mobile number")]
        [StringLength(10)]
        [RegularExpression("^[7-9][0-9]{9}$",ErrorMessage = "Please provide a valid mobile number")]
        public string MobileNumber { get; set; }

        public int UserID { get; set; }
    }
}
