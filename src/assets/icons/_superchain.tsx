import { cn } from "@/utils";

interface Props {
  id?: string;
  className?: string;
}

const _ = ({ id, className }: Props) => {
  return (
    <svg
      id={id}
      className={cn(className)}
      width="153"
      height="38"
      viewBox="0 0 153 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.45085 22.068H8.9316V24.2694H5.45085V29.3244C5.45085 29.8847 5.59716 30.3134 5.89091 30.6139C6.18466 30.9145 6.6111 31.0653 7.17025 31.0653H8.9316V33.624H7.29614C6.21982 33.624 5.33857 33.4879 4.65354 33.2146C3.9685 32.9424 3.46153 32.4774 3.13262 31.8196C2.80371 31.1629 2.63926 30.2748 2.63926 29.1554V24.2683H0.835938V22.0669H2.63926V18.8787H5.44972V22.0669L5.45085 22.068ZM17.1951 21.7119H17.0692C16.188 21.7119 15.4565 21.9217 14.8769 22.3413C14.3336 22.7338 13.9208 23.2997 13.6293 24.0222V18.1665H10.6306V33.4777H13.6293V26.8916C13.6293 26.151 13.8425 25.5533 14.269 25.0985C14.6954 24.6448 15.258 24.4169 15.9578 24.4169C16.6156 24.4169 17.1464 24.6233 17.5524 25.035C17.9573 25.4478 18.1603 26.0036 18.1603 26.7022V33.4766H21.159V26.9744C21.159 25.2686 20.8233 23.9643 20.1519 23.0627C19.4805 22.161 18.4949 21.7096 17.1951 21.7096V21.7119ZM33.4919 24.6165C33.9252 25.4909 34.1418 26.4311 34.1418 27.4371V28.5271H25.6106C25.6605 28.9422 25.7501 29.3267 25.8885 29.6703C26.1051 30.209 26.4408 30.6321 26.8956 30.9394C27.3504 31.2468 27.9266 31.4011 28.6264 31.4011C29.3262 31.4011 29.891 31.2615 30.3254 30.9814C30.7586 30.7024 31.0387 30.3667 31.1646 29.9743H33.9331C33.7653 30.7432 33.4432 31.4249 32.968 32.0192C32.4927 32.6135 31.8882 33.0717 31.1533 33.3926C30.4195 33.7136 29.5768 33.8747 28.6264 33.8747C27.6759 33.8747 26.7913 33.7068 26.0575 33.3711C25.3226 33.0354 24.7112 32.584 24.2224 32.018C23.7325 31.4521 23.3661 30.8192 23.1211 30.1194C22.8762 29.4197 22.7548 28.7074 22.7548 27.9804V27.5608C22.7548 26.8054 22.8762 26.0784 23.1211 25.3798C23.3661 24.6811 23.7302 24.0517 24.2122 23.4925C24.6942 22.9334 25.2953 22.4899 26.0167 22.161C26.7369 21.8332 27.5648 21.6677 28.5016 21.6677C29.731 21.6677 30.7631 21.941 31.5956 22.4865C32.427 23.032 33.0598 23.742 33.4942 24.6153L33.4919 24.6165ZM25.8998 25.8334C25.791 26.0954 25.7093 26.3869 25.6537 26.7033H31.2678C31.2157 26.3552 31.1351 26.0342 31.0183 25.7495C30.8085 25.2391 30.4943 24.8444 30.0747 24.5643C29.6551 24.2842 29.1311 24.1447 28.5016 24.1447C27.8722 24.1447 27.338 24.291 26.8968 24.5859C26.4556 24.8796 26.1244 25.2958 25.901 25.8334H25.8998ZM48.6138 25.1303C47.7881 24.7526 46.824 24.5144 45.7194 24.4169L44.4185 24.3125C43.6631 24.2422 43.1187 24.0324 42.783 23.6831C42.4473 23.3337 42.2794 22.9277 42.2794 22.4672C42.2794 22.0896 42.3736 21.7402 42.5619 21.4181C42.7513 21.0972 43.0337 20.8386 43.4113 20.6424C43.789 20.4473 44.2642 20.3486 44.837 20.3486C45.4097 20.3486 45.9349 20.4564 46.3261 20.6741C46.7174 20.8907 47.0112 21.1743 47.2074 21.5236C47.4036 21.8729 47.5011 22.2517 47.5011 22.6566H50.501C50.501 21.6642 50.273 20.7966 49.8194 20.056C49.3646 19.3143 48.7147 18.7415 47.8686 18.3355C47.0225 17.9306 46.012 17.7276 44.837 17.7276C43.662 17.7276 42.7433 17.9192 41.9108 18.3049C41.0784 18.6893 40.4285 19.2349 39.9601 19.9403C39.4905 20.6469 39.2569 21.4896 39.2569 22.4684C39.2569 23.7829 39.6981 24.8388 40.5782 25.635C41.4594 26.4323 42.6401 26.8927 44.1225 27.0198L45.4234 27.1241C46.3885 27.208 47.0974 27.4111 47.5522 27.732C48.007 28.0541 48.2338 28.4806 48.2338 29.0114C48.2338 29.431 48.1147 29.8087 47.8777 30.1444C47.6395 30.4801 47.2834 30.7489 46.8082 30.9519C46.3318 31.1549 45.7386 31.2559 45.0253 31.2559C44.2279 31.2559 43.5883 31.1413 43.1063 30.91C42.6242 30.6786 42.2704 30.378 42.0469 30.0083C41.8235 29.6386 41.7112 29.2427 41.7112 28.8231H38.7125C38.7125 29.8019 38.9575 30.6729 39.4474 31.4351C39.9363 32.1972 40.6497 32.7949 41.5865 33.2282C42.5233 33.6614 43.6699 33.8781 45.0264 33.8781C46.2978 33.8781 47.3991 33.675 48.3302 33.2702C49.2602 32.8653 49.977 32.2948 50.4795 31.561C50.983 30.826 51.2348 29.9777 51.2348 29.0125C51.2348 28.0473 51.0046 27.3067 50.543 26.6636C50.0814 26.0206 49.4383 25.5102 48.6138 25.1325V25.1303ZM60.045 28.8004C60.045 29.5138 59.8386 30.0797 59.4258 30.4994C59.0129 30.919 58.4719 31.1289 57.8005 31.1289C57.1291 31.1289 56.6425 30.9304 56.258 30.5311C55.8735 30.1331 55.6819 29.5909 55.6819 28.9059V22.0691H52.6831V28.6757C52.6831 30.3962 53.0393 31.6857 53.7527 32.5454C54.466 33.4051 55.4868 33.835 56.8149 33.835H56.9408C57.822 33.835 58.5524 33.6433 59.132 33.2577C59.7127 32.8732 60.1528 32.2959 60.4533 31.5269C60.5406 31.3035 60.6121 31.0574 60.6733 30.7999V33.4777H63.0437V22.068H60.045V28.8004ZM77.4011 25.2448C77.6461 25.9514 77.7686 26.717 77.7686 27.5415V27.9815C77.7686 28.8072 77.6495 29.5762 77.4113 30.2884C77.1732 31.0007 76.8204 31.6233 76.352 32.1553C75.8836 32.6872 75.3245 33.1023 74.6746 33.4029C74.0236 33.7034 73.2864 33.8542 72.4618 33.8542C71.6373 33.8542 70.8286 33.6762 70.1232 33.3189C69.5221 33.0161 69.0265 32.5624 68.6238 31.9761V37.6718H65.6251V22.0669H67.9955V24.9443C68.0987 24.6301 68.2155 24.3295 68.3618 24.0596C68.7883 23.277 69.3576 22.6895 70.0722 22.2982C70.7855 21.907 71.5817 21.7107 72.463 21.7107C73.2739 21.7107 74.0054 21.8605 74.6542 22.161C75.3052 22.4616 75.8632 22.8744 76.3327 23.3984C76.8011 23.9224 77.1573 24.5382 77.4023 25.2437L77.4011 25.2448ZM74.7687 27.7524C74.7687 27.0527 74.6394 26.4413 74.3808 25.9174C74.1211 25.3922 73.7616 24.9839 73.3 24.6902C72.8384 24.3965 72.3008 24.249 71.6849 24.249C71.1258 24.249 70.6075 24.3715 70.1323 24.6165C69.657 24.8615 69.2726 25.2244 68.9788 25.7075C68.6851 26.1896 68.5388 26.7669 68.5388 27.4383V28.256C68.5388 28.8991 68.6885 29.4514 68.989 29.913C69.2896 30.3746 69.682 30.7274 70.164 30.9723C70.646 31.2173 71.153 31.3387 71.6849 31.3387C72.2997 31.3387 72.8384 31.1856 73.3 30.8771C73.7616 30.5697 74.1211 30.1467 74.3808 29.6079C74.6394 29.0703 74.7687 28.4511 74.7687 27.7513V27.7524ZM89.5344 24.6165C89.9677 25.4909 90.1843 26.4311 90.1843 27.4371V28.5271H81.6531C81.703 28.9422 81.7926 29.3267 81.931 29.6703C82.1476 30.209 82.4833 30.6321 82.9381 30.9394C83.3929 31.2468 83.9691 31.4011 84.6688 31.4011C85.3686 31.4011 85.9334 31.2615 86.3678 30.9814C86.8011 30.7024 87.0812 30.3667 87.2071 29.9743H89.9756C89.8078 30.7432 89.4856 31.4249 89.0104 32.0192C88.5352 32.6135 87.9307 33.0717 87.1958 33.3926C86.462 33.7136 85.6193 33.8747 84.6688 33.8747C83.7184 33.8747 82.8338 33.7068 82.1 33.3711C81.365 33.0354 80.7537 32.584 80.2649 32.018C79.7749 31.4521 79.4086 30.8192 79.1636 30.1194C78.9186 29.4197 78.7973 28.7074 78.7973 27.9804V27.5608C78.7973 26.8054 78.9186 26.0784 79.1636 25.3798C79.4086 24.6811 79.7727 24.0517 80.2547 23.4925C80.7367 22.9334 81.3378 22.4899 82.0591 22.161C82.7793 21.8332 83.6073 21.6677 84.5441 21.6677C85.7735 21.6677 86.8056 21.941 87.6381 22.4865C88.4694 23.032 89.1023 23.742 89.5367 24.6153L89.5344 24.6165ZM81.9412 25.8334C81.8323 26.0954 81.7506 26.3869 81.6951 26.7033H87.3092C87.257 26.3552 87.1765 26.0342 87.0597 25.7495C86.8498 25.2391 86.5357 24.8444 86.116 24.5643C85.6964 24.2842 85.1724 24.1447 84.543 24.1447C83.9135 24.1447 83.3793 24.291 82.9381 24.5859C82.4969 24.8796 82.1657 25.2958 81.9423 25.8334H81.9412ZM95.1973 23.1999C94.6676 23.8464 94.3399 24.7152 94.2117 25.8028V22.068H91.8413V33.4777H94.8412V27.563C94.8412 26.5843 95.1066 25.8357 95.6385 25.3185C96.1693 24.8013 96.9178 24.5428 97.883 24.5428H98.7007V21.9206H98.2607C96.9178 21.9206 95.8982 22.347 95.1984 23.1999H95.1973ZM106.985 30.2896C106.775 30.5969 106.492 30.8419 106.135 31.0234C105.779 31.2048 105.349 31.2956 104.846 31.2956C104.188 31.2956 103.654 31.1459 103.241 30.8442C102.828 30.5436 102.524 30.124 102.328 29.5864C102.132 29.0488 102.034 28.4511 102.034 27.7933C102.034 27.0935 102.14 26.4822 102.349 25.9582C102.559 25.4331 102.87 25.018 103.283 24.7106C103.694 24.4033 104.208 24.249 104.824 24.249C105.566 24.249 106.139 24.4452 106.545 24.8365C106.95 25.2278 107.188 25.7109 107.258 26.2837H110.194C110.139 25.3605 109.872 24.553 109.397 23.8611C108.922 23.1693 108.292 22.6306 107.51 22.2461C106.726 21.8616 105.831 21.6688 104.824 21.6688C103.874 21.6688 103.038 21.8332 102.318 22.1621C101.597 22.4911 100.993 22.9311 100.503 23.4834C100.013 24.0358 99.6466 24.6686 99.4016 25.382C99.1567 26.0954 99.0342 26.836 99.0342 27.605V28.0031C99.0342 28.7301 99.1533 29.4435 99.3914 30.1421C99.6285 30.8419 99.9891 31.4736 100.471 32.0407C100.954 32.6067 101.559 33.0547 102.286 33.3824C103.013 33.7113 103.866 33.8758 104.846 33.8758C105.826 33.8758 106.775 33.6796 107.572 33.2883C108.369 32.897 109.009 32.3515 109.491 31.6517C109.973 30.9531 110.235 30.1421 110.277 29.2189H107.362C107.32 29.6249 107.194 29.9811 106.985 30.2884V30.2896ZM118.415 21.7119H118.289C117.408 21.7119 116.677 21.9217 116.097 22.3413C115.553 22.7338 115.142 23.2986 114.849 24.0222V18.1676H111.85V33.4788H114.849V26.8927C114.849 26.1521 115.061 25.5544 115.489 25.0996C115.915 24.646 116.478 24.418 117.177 24.418C117.834 24.418 118.365 24.6244 118.771 25.0361C119.177 25.449 119.38 26.0047 119.38 26.7033V33.4777H122.379V26.9755C122.379 25.2698 122.043 23.9655 121.372 23.0638C120.7 22.1621 119.715 21.7107 118.414 21.7107L118.415 21.7119ZM133.402 23.8407C133.8 24.5053 133.999 25.3684 133.999 26.4311V33.4788H131.629V31.2797C131.537 31.5757 131.424 31.8502 131.283 32.0952C130.969 32.6407 130.534 33.0569 129.983 33.3427C129.43 33.6297 128.756 33.7726 127.96 33.7726C127.164 33.7726 126.411 33.6263 125.789 33.3325C125.166 33.0388 124.684 32.6191 124.342 32.0736C123.999 31.5281 123.828 30.8714 123.828 30.1024C123.828 29.2631 124.035 28.5781 124.447 28.0473C124.859 27.5165 125.443 27.1173 126.199 26.8519C126.954 26.5865 127.835 26.4538 128.842 26.4538H131.129V26.3699C131.129 25.7268 130.971 25.2448 130.657 24.9227C130.343 24.6017 129.856 24.4407 129.2 24.4407C128.864 24.4407 128.451 24.4475 127.962 24.4611C127.472 24.4747 126.972 24.4929 126.462 24.5133C125.951 24.5337 125.5 24.5586 125.109 24.587V22.0487C125.431 22.0204 125.794 21.9932 126.199 21.9648C126.605 21.9364 127.028 21.9194 127.468 21.9126C127.909 21.9058 128.317 21.9024 128.695 21.9024C129.87 21.9024 130.849 22.0589 131.631 22.3742C132.414 22.6884 133.005 23.1784 133.404 23.843L133.402 23.8407ZM130.748 30.6888C130.971 30.3395 131.097 29.8643 131.125 29.262V28.214H128.817C128.16 28.214 127.657 28.3751 127.308 28.6961C126.958 29.0182 126.784 29.4378 126.784 29.955C126.784 30.4722 126.958 30.868 127.308 31.1822C127.657 31.4963 128.161 31.654 128.817 31.654C129.209 31.654 129.573 31.5814 129.908 31.4339C130.244 31.2876 130.523 31.0393 130.748 30.6888ZM135.299 22.068V24.3125H136.894V33.4777H139.892V22.068H135.299ZM138.005 20.7467C138.578 20.7467 139.004 20.597 139.283 20.2953C139.564 19.9948 139.703 19.6069 139.703 19.1317C139.703 18.6564 139.564 18.2674 139.283 17.968C139.004 17.6675 138.577 17.5166 138.005 17.5166C137.434 17.5166 136.984 17.6663 136.704 17.968C136.424 18.2686 136.285 18.6564 136.285 19.1317C136.285 19.6069 136.424 19.9948 136.704 20.2953C136.983 20.5959 137.418 20.7467 138.005 20.7467ZM151.952 23.023C151.252 22.1485 150.225 21.7119 148.869 21.7119H148.743C147.834 21.7119 147.075 21.907 146.467 22.2994C145.859 22.6907 145.401 23.2782 145.094 24.0607C144.991 24.3239 144.911 24.6153 144.842 24.9204V22.0691H142.472V33.4788H145.47V26.7884C145.47 26.075 145.684 25.5023 146.11 25.069C146.536 24.6358 147.099 24.4191 147.799 24.4191C148.499 24.4191 149.021 24.629 149.414 25.0486C149.805 25.4682 150.001 26.0206 150.001 26.7056V33.48H153V26.9574C153 25.2096 152.651 23.8986 151.952 23.0252V23.023ZM34.9165 2.51048H37.5897V10.1797H39.3306V2.51048H42.005V0.971414H34.9165V2.51048ZM57.5691 3.73424C57.771 4.28885 57.8719 4.84912 57.8719 5.41167V5.6884C57.8719 6.20105 57.7733 6.73297 57.5748 7.28417C57.3774 7.83538 57.0803 8.34802 56.6856 8.82324C56.2909 9.29845 55.7885 9.68293 55.1783 9.97668C54.5681 10.2704 53.8513 10.4179 53.0268 10.4179C52.2023 10.4179 51.473 10.2704 50.8639 9.97668C50.2549 9.68293 49.7491 9.29845 49.351 8.82324C48.9517 8.34802 48.6546 7.83538 48.4618 7.28417C48.2678 6.73297 48.1714 6.20218 48.1714 5.6884V5.41167C48.1714 4.84799 48.2724 4.28885 48.4743 3.73424C48.6761 3.17963 48.979 2.67266 49.3827 2.21446C49.7865 1.75626 50.2912 1.38992 50.8968 1.11772C51.5025 0.844387 52.2125 0.707153 53.0279 0.707153C53.8434 0.707153 54.5398 0.844387 55.1409 1.11772C55.742 1.39105 56.2467 1.75626 56.655 2.21446C57.0621 2.67266 57.3672 3.17963 57.5691 3.73424ZM56.106 5.56365C56.106 5.10091 56.0346 4.67446 55.8917 4.28317C55.7488 3.89189 55.5424 3.54937 55.2736 3.25562C55.0048 2.96074 54.6804 2.73391 54.3027 2.57399C53.9239 2.41407 53.4997 2.33468 53.0279 2.33468C52.5561 2.33468 52.1183 2.41521 51.735 2.57399C51.3528 2.73391 51.0261 2.96074 50.7573 3.25562C50.4885 3.54937 50.2844 3.89189 50.146 4.28317C50.0076 4.67446 49.9373 5.10091 49.9373 5.56365C49.9373 6.0003 50.0065 6.41314 50.146 6.79989C50.2844 7.18664 50.4885 7.53142 50.7573 7.83424C51.0261 8.13707 51.3528 8.37184 51.735 8.54083C52.1172 8.70982 52.5482 8.79375 53.0279 8.79375C53.5077 8.79375 53.9262 8.70982 54.3084 8.54083C54.6906 8.37297 55.0161 8.13707 55.286 7.83424C55.5548 7.53142 55.759 7.18664 55.8974 6.79989C56.0357 6.41314 56.106 6.00143 56.106 5.56365ZM67.5452 8.7291H67.3694L63.4339 0.971414H60.5701V10.1797H62.1977V2.42201H62.361L66.309 10.1797H69.1852V0.971414H67.5452V8.7291ZM8.32369 6.09897C8.59703 6.43922 8.73426 6.89969 8.73426 7.48038V7.65731C8.73426 8.20398 8.61404 8.67126 8.37473 9.05687C8.13542 9.44362 7.77929 9.73851 7.30862 9.94039C6.83794 10.1423 6.25271 10.2432 5.5552 10.2432H1.89638V0.909035H5.17525C6.21868 0.909035 7.00806 1.12793 7.54679 1.56458C8.08552 2.00124 8.35431 2.62843 8.35431 3.44389V3.62082C8.35431 4.19244 8.21708 4.64838 7.94375 4.98976C7.79631 5.17236 7.61824 5.32547 7.41296 5.45136C7.78723 5.60107 8.09232 5.8143 8.32256 6.10011L8.32369 6.09897ZM3.61237 2.32107V4.85706H5.34084C5.78657 4.85706 6.11207 4.74138 6.31849 4.51001C6.52491 4.27864 6.62812 3.97355 6.62812 3.59587C6.62812 3.21819 6.52491 2.89949 6.31849 2.66812C6.11321 2.43675 5.78657 2.32107 5.34084 2.32107H3.61237ZM7.00579 7.51781C7.00579 7.10611 6.89465 6.78628 6.67121 6.55944C6.44778 6.33261 6.11774 6.21919 5.68109 6.21919H3.61237V8.83004H5.68109C6.1098 8.83004 6.43758 8.71436 6.66554 8.48299C6.89238 8.25162 7.00579 7.92951 7.00579 7.51781ZM17.6 6.57192C17.6 7.02558 17.5161 7.41914 17.3482 7.75145C17.1804 8.08376 16.932 8.34008 16.6042 8.52041C16.2765 8.70188 15.8772 8.79148 15.4066 8.79148C14.9359 8.79148 14.523 8.70075 14.1953 8.52041C13.8675 8.34008 13.6191 8.08149 13.4513 7.74464C13.2834 7.40893 13.1995 7.01765 13.1995 6.57192V0.971414H11.446V6.47098C11.446 7.26943 11.5992 7.96354 11.9065 8.55217C12.2127 9.1408 12.6585 9.599 13.2437 9.92678C13.8278 10.2546 14.5491 10.419 15.4066 10.419C16.264 10.419 16.9853 10.2557 17.5694 9.92678C18.1535 9.599 18.5958 9.1408 18.8941 8.55217C19.1924 7.96354 19.3421 7.26943 19.3421 6.47098V0.971414H17.6012V6.57192H17.6ZM22.7582 10.1797H24.5116V0.971414H22.7582V10.1797ZM30.3004 0.971414H28.547V10.1797H34.0341V8.64063H30.3004V0.971414Z"
        fill="#FDAFF0"
      />
    </svg>
  );
};

export default _;