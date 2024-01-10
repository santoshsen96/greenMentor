import React from "react";

export const Navbar = () => {
  const backgroundImage =
    "https://s3-alpha-sig.figma.com/img/b270/0d23/767117420f0f997824b701ee2fce525b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4i3kXNB6MQGcPoEeb9QxMjz6dbw1fpFjujfUGGbjo603Q5vY-EklfYygLXWdxCI53s5vi3cjwm97mbsAXzQKS4arCB2AkLWpaaTztNU5-XBkZMyVxyglLxEBu1JKnPF9iBEzVOmEeNBkv4c2BQbfWfDL8hIQjcpklLa-LZZT7lTix9KnSK3ujpw15mv0pxwBYn2ZPmpT0X9AKjRK7jzoW6zG0BUUxKuQRxBx984rjwThMCTeq2r6RnyZn-69y85-DUdsUb7C4gD7QXba24fUA3K6ZI-wCIPo8yGlw6ueLEd~BwjVKQNlUgsmXMUL3XPFWgYoAZRTxWk9YMi8Nen7A__";
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  };

  const iconContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  };

  const iconStyle = {
    borderRadius: "32px",
    background: `url(${backgroundImage}), lightgray 50% / cover no-repeat`,
    width: "32px",
    height: "32px",
  };

  const textStyle = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "HelveticaNeue",
    fontSize: "9px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  return (
    <div style={containerStyle}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z"
            fill="#02AB6C"
          />
          <path
            d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z"
            fill="#02AB6C"
          />
          <path
            d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z"
            fill="#02AB6C"
          />
          <path
            d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z"
            fill="#02AB6C"
          />
          <path
            d="M12.8691 15.6985C11.99 16.1428 11.0131 16.3795 9.99957 16.3795C6.48177 16.3795 3.61988 13.5174 3.61988 9.99943C3.61988 8.10453 4.45168 6.35944 5.83537 5.17004L4.40368 1.71344C1.67938 3.54464 0.000579834 6.62153 0.000579834 10.0016C0.000579834 15.5148 4.48518 19.9999 9.99777 19.9999C11.991 19.9999 13.8944 19.4218 15.5167 18.3466L12.8691 15.6985Z"
            fill="#02AB6C"
          />
        </svg>
        <span style={{ marginLeft: "2px" }}>Category-1</span>
      </div>

      <div style={iconContainerStyle}>
        <div style={iconStyle}></div>
        <div style={textStyle}>Category-2</div>
      </div>
    </div>
  );
};
