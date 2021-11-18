import React from "react";

interface iconProps {
  backgroundColour: string;
  letColour: string;
  heartLine: string;
  heartFill: string;
  zeroLine: string;
  zeroFill: string;
  zeroDot: string;
  size: string;
}

const Icon: React.FC<iconProps> = (props) => {
  let {
    backgroundColour,
    letColour,
    heartLine,
    heartFill,
    zeroLine,
    zeroFill,
    zeroDot,
    size,
  } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon 1" clipPath="url(#clip0)">
        <path
          id="background"
          d="M508.207 1.89651H0V510.104H508.207V1.89651Z"
          fill={backgroundColour}
        />
        <g id="lowerLine">
          <g id="zero">
            <path
              id="outLine"
              d="M421.935 456C451.794 456 476 415.706 476 366C476 316.294 451.794 276 421.935 276C392.076 276 367.87 316.294 367.87 366C367.87 415.706 392.076 456 421.935 456Z"
              fill={zeroLine}
            />
            <path
              id="insideColour"
              d="M422.149 448.125C440.811 448.125 455.939 411.356 455.939 366C455.939 320.644 440.811 283.875 422.149 283.875C403.487 283.875 388.358 320.644 388.358 366C388.358 411.356 403.487 448.125 422.149 448.125Z"
              fill={zeroFill}
            />
            <path
              id="innerDot"
              d="M421.935 371.625C425.045 371.625 427.567 369.107 427.567 366C427.567 362.893 425.045 360.375 421.935 360.375C418.825 360.375 416.303 362.893 416.303 366C416.303 369.107 418.825 371.625 421.935 371.625Z"
              fill={zeroDot}
            />
          </g>
          <g id="Heart">
            <g id="heartBottom">
              <path
                d="M112.423 369.78C-1.85988 369.78 32.4251 434.575 49.0037 446.394C65.3974 458.08 95.2808 458.137 131.392 444.388C149.145 437.629 186.707 422.795 229.114 400.703C274.593 377.011 312.794 375.061 340.99 369.78"
                fill={heartFill}
              />
              <path
                d="M112.423 369.78C-1.85988 369.78 32.4251 434.575 49.0037 446.394C65.3974 458.08 95.2808 458.137 131.392 444.388C149.145 437.629 186.707 422.795 229.114 400.703C274.593 377.011 312.794 375.061 340.99 369.78"
                stroke={heartLine}
                strokeWidth="10"
              />
            </g>
            <g id="heartTop">
              <path
                d="M112.423 369.78C-1.85989 369.78 32.4251 304.985 49.0037 293.167C65.3974 281.48 95.2809 281.423 131.392 295.173C149.145 301.932 186.707 316.766 229.114 338.858C274.593 362.55 312.794 364.5 340.99 369.78"
                fill={heartFill}
              />
              <path
                d="M112.423 369.78C-1.85989 369.78 32.4251 304.985 49.0037 293.167C65.3974 281.48 95.2809 281.423 131.392 295.173C149.145 301.932 186.707 316.766 229.114 338.858C274.593 362.55 312.794 364.5 340.99 369.78"
                stroke={heartLine}
                strokeWidth="10"
              />
            </g>
            <path
              id="cover"
              d="M195.378 284.286H134.951V453.025H195.378V284.286Z"
              fill={backgroundColour}
              stroke={backgroundColour}
              strokeWidth="7.76856"
            />
          </g>
        </g>
        <g id="letBox" clipPath="url(#clip1)">
          <g id="let">
            <g id="t">
              <path
                d="M399.969 73.5363V112.729H427.833V121.844H399.969V199.187C399.969 206.913 401.054 212.122 403.224 214.812C405.481 217.503 408.346 218.849 411.818 218.849C414.682 218.849 417.46 217.981 420.151 216.245C422.842 214.422 424.925 211.774 426.401 208.302H431.479C428.441 216.809 424.144 223.233 418.589 227.573C413.033 231.826 407.304 233.953 401.401 233.953C397.408 233.953 393.502 232.868 389.682 230.698C385.863 228.441 383.042 225.273 381.219 221.193C379.396 217.026 378.484 210.646 378.484 202.052V121.844H359.604V117.547C364.378 115.637 369.24 112.425 374.188 107.911C379.222 103.311 383.693 97.8853 387.599 91.6352C389.596 88.3366 392.373 82.3036 395.932 73.5363H399.969Z"
                fill={letColour}
              />
              <path
                d="M399.969 73.5363H400.969V72.5363H399.969V73.5363ZM399.969 112.729H398.969V113.729H399.969V112.729ZM427.833 112.729H428.833V111.729H427.833V112.729ZM427.833 121.844V122.844H428.833V121.844H427.833ZM399.969 121.844V120.844H398.969V121.844H399.969ZM403.224 214.812L402.446 215.44L402.452 215.448L402.458 215.455L403.224 214.812ZM420.151 216.245L420.693 217.085L420.703 217.079L420.712 217.073L420.151 216.245ZM426.401 208.302V207.302H425.74L425.481 207.911L426.401 208.302ZM431.479 208.302L432.421 208.638L432.898 207.302H431.479V208.302ZM418.589 227.573L419.197 228.367L419.204 228.361L418.589 227.573ZM389.682 230.698L389.174 231.559L389.181 231.563L389.188 231.567L389.682 230.698ZM381.219 221.193L380.303 221.594L380.306 221.601L381.219 221.193ZM378.484 121.844H379.484V120.844H378.484V121.844ZM359.604 121.844H358.604V122.844H359.604V121.844ZM359.604 117.547L359.233 116.618L358.604 116.87V117.547H359.604ZM374.188 107.911L374.861 108.65L374.862 108.65L374.188 107.911ZM387.599 91.6352L388.447 92.1652L388.451 92.1592L388.454 92.153L387.599 91.6352ZM395.932 73.5363V72.5363H395.259L395.006 73.1601L395.932 73.5363ZM398.969 73.5363V112.729H400.969V73.5363H398.969ZM399.969 113.729H427.833V111.729H399.969V113.729ZM426.833 112.729V121.844H428.833V112.729H426.833ZM427.833 120.844H399.969V122.844H427.833V120.844ZM398.969 121.844V199.187H400.969V121.844H398.969ZM398.969 199.187C398.969 203.091 399.242 206.398 399.804 209.092C400.363 211.775 401.222 213.923 402.446 215.44L404.002 214.185C403.056 213.011 402.288 211.209 401.762 208.684C401.238 206.17 400.969 203.01 400.969 199.187H398.969ZM402.458 215.455C404.902 218.37 408.046 219.849 411.818 219.849V217.849C408.645 217.849 406.06 216.637 403.99 214.17L402.458 215.455ZM411.818 219.849C414.897 219.849 417.86 218.913 420.693 217.085L419.609 215.404C417.06 217.049 414.468 217.849 411.818 217.849V219.849ZM420.712 217.073C423.587 215.125 425.783 212.313 427.321 208.693L425.481 207.911C424.068 211.235 422.098 213.718 419.59 215.417L420.712 217.073ZM426.401 209.302H431.479V207.302H426.401V209.302ZM430.538 207.966C427.545 216.344 423.343 222.59 417.973 226.785L419.204 228.361C424.946 223.875 429.337 217.274 432.421 208.638L430.538 207.966ZM417.981 226.779C412.566 230.924 407.045 232.953 401.401 232.953V234.953C407.562 234.953 413.5 232.728 419.197 228.367L417.981 226.779ZM401.401 232.953C397.598 232.953 393.861 231.922 390.176 229.828L389.188 231.567C393.143 233.814 397.218 234.953 401.401 234.953V232.953ZM390.191 229.837C386.551 227.686 383.871 224.677 382.132 220.785L380.306 221.601C382.213 225.868 385.174 229.196 389.174 231.559L390.191 229.837ZM382.135 220.792C380.397 216.819 379.484 210.609 379.484 202.052H377.484C377.484 210.683 378.395 217.233 380.303 221.594L382.135 220.792ZM379.484 202.052V121.844H377.484V202.052H379.484ZM378.484 120.844H359.604V122.844H378.484V120.844ZM360.604 121.844V117.547H358.604V121.844H360.604ZM359.976 118.475C364.889 116.51 369.85 113.222 374.861 108.65L373.514 107.173C368.629 111.629 363.868 114.764 359.233 116.618L359.976 118.475ZM374.862 108.65C379.969 103.983 384.496 98.486 388.447 92.1652L386.751 91.1052C382.889 97.2845 378.476 102.638 373.513 107.173L374.862 108.65ZM388.454 92.153C390.497 88.7789 393.3 82.6786 396.859 73.9124L395.006 73.1601C391.446 81.9287 388.694 87.8943 386.743 91.1174L388.454 92.153ZM395.932 74.5363H399.969V72.5363H395.932V74.5363Z"
                fill={letColour}
              />
            </g>
            <g id="e">
              <path
                d="M266.385 157.651C266.299 175.359 270.596 189.248 279.276 199.318C287.957 209.387 298.156 214.422 309.875 214.422C317.688 214.422 324.458 212.295 330.188 208.042C336.004 203.701 340.865 196.323 344.771 185.906L348.807 188.51C346.985 200.403 341.689 211.253 332.922 221.062C324.155 230.785 313.174 235.646 299.979 235.646C285.656 235.646 273.373 230.09 263.13 218.979C252.974 207.781 247.896 192.764 247.896 173.927C247.896 153.528 253.104 137.642 263.521 126.271C274.024 114.812 287.175 109.083 302.974 109.083C316.342 109.083 327.323 113.51 335.917 122.364C344.511 131.132 348.807 142.894 348.807 157.651H266.385ZM266.385 150.099H321.594C321.16 142.46 320.248 137.078 318.859 133.953C316.689 129.092 313.434 125.272 309.094 122.495C304.84 119.717 300.37 118.328 295.682 118.328C288.477 118.328 282.01 121.149 276.281 126.792C270.639 132.347 267.34 140.116 266.385 150.099Z"
                fill={letColour}
              />
              <path
                d="M266.385 157.651V156.651H265.39L265.385 157.646L266.385 157.651ZM279.276 199.318L278.519 199.971L279.276 199.318ZM330.188 208.042L330.784 208.845L330.786 208.843L330.188 208.042ZM344.771 185.906L345.313 185.066L344.27 184.393L343.835 185.555L344.771 185.906ZM348.807 188.51L349.796 188.662L349.894 188.021L349.35 187.67L348.807 188.51ZM332.922 221.062L333.665 221.732L333.668 221.729L332.922 221.062ZM263.13 218.979L262.389 219.651L262.395 219.657L263.13 218.979ZM263.521 126.271L262.784 125.595L262.783 125.595L263.521 126.271ZM335.917 122.364L335.199 123.061L335.203 123.064L335.917 122.364ZM348.807 157.651V158.651H349.807V157.651H348.807ZM266.385 150.099L265.39 150.004L265.285 151.099H266.385V150.099ZM321.594 150.099V151.099H322.652L322.592 150.042L321.594 150.099ZM318.859 133.953L319.773 133.547L319.773 133.545L318.859 133.953ZM309.094 122.495L308.547 123.332L308.555 123.337L309.094 122.495ZM276.281 126.792L276.983 127.504L276.983 127.504L276.281 126.792ZM265.385 157.646C265.298 175.515 269.635 189.665 278.519 199.971L280.034 198.665C271.556 188.831 267.299 175.204 267.385 157.656L265.385 157.646ZM278.519 199.971C287.361 210.227 297.824 215.422 309.875 215.422V213.422C298.488 213.422 288.553 208.547 280.034 198.665L278.519 199.971ZM309.875 215.422C317.881 215.422 324.866 213.238 330.784 208.845L329.592 207.239C324.051 211.352 317.494 213.422 309.875 213.422V215.422ZM330.786 208.843C336.817 204.342 341.767 196.765 345.707 186.257L343.835 185.555C339.962 195.881 335.191 203.06 329.59 207.24L330.786 208.843ZM344.229 186.746L348.265 189.351L349.35 187.67L345.313 185.066L344.229 186.746ZM347.819 188.359C346.028 200.042 340.827 210.717 332.176 220.396L333.668 221.729C342.552 211.789 347.941 200.764 349.796 188.662L347.819 188.359ZM332.179 220.393C323.603 229.903 312.893 234.646 299.979 234.646V236.646C313.454 236.646 324.706 231.667 333.665 221.732L332.179 220.393ZM299.979 234.646C285.953 234.646 273.931 229.22 263.865 218.301L262.395 219.657C272.816 230.961 285.36 236.646 299.979 236.646V234.646ZM263.871 218.307C253.92 207.336 248.896 192.579 248.896 173.927H246.896C246.896 192.949 252.028 208.227 262.39 219.651L263.871 218.307ZM248.896 173.927C248.896 153.695 254.059 138.08 264.258 126.946L262.783 125.595C252.149 137.204 246.896 153.36 246.896 173.927H248.896ZM264.258 126.946C274.569 115.699 287.45 110.083 302.974 110.083V108.083C286.9 108.083 273.48 113.926 262.784 125.595L264.258 126.946ZM302.974 110.083C316.097 110.083 326.81 114.418 335.199 123.061L336.634 121.668C327.836 112.603 316.587 108.083 302.974 108.083V110.083ZM335.203 123.064C343.577 131.608 347.807 143.099 347.807 157.651H349.807C349.807 142.689 345.444 130.655 336.631 121.664L335.203 123.064ZM348.807 156.651H266.385V158.651H348.807V156.651ZM266.385 151.099H321.594V149.099H266.385V151.099ZM322.592 150.042C322.158 142.395 321.242 136.852 319.773 133.547L317.946 134.359C319.254 137.304 320.162 142.525 320.595 150.156L322.592 150.042ZM319.773 133.545C317.526 128.512 314.143 124.539 309.633 121.652L308.555 123.337C312.725 126.006 315.853 129.672 317.946 134.361L319.773 133.545ZM309.641 121.657C305.239 118.783 300.58 117.328 295.682 117.328V119.328C300.159 119.328 304.442 120.651 308.547 123.332L309.641 121.657ZM295.682 117.328C288.183 117.328 281.472 120.276 275.58 126.079L276.983 127.504C282.549 122.023 288.772 119.328 295.682 119.328V117.328ZM275.58 126.079C269.729 131.839 266.361 139.851 265.39 150.004L267.381 150.194C268.32 140.381 271.549 132.855 276.983 127.504L275.58 126.079Z"
                fill={letColour}
              />
            </g>
            <g id="L">
              <path
                d="M227.865 183.172L232.162 184.083L217.057 232H80.3385V227.182H86.9792C94.4445 227.182 99.783 224.752 102.995 219.891C104.818 217.113 105.729 210.689 105.729 200.62V86.6873C105.729 75.663 104.514 68.762 102.083 65.9842C98.6979 62.1647 93.6632 60.255 86.9792 60.255H80.3385V55.4373H160.287V60.255C150.912 60.1682 144.314 61.0362 140.495 62.8592C136.762 64.6821 134.201 66.9824 132.813 69.7602C131.424 72.538 130.729 79.1786 130.729 89.6821V200.62C130.729 207.825 131.424 212.773 132.813 215.464C133.854 217.286 135.46 218.632 137.63 219.5C139.8 220.368 146.571 220.802 157.943 220.802H170.833C184.375 220.802 193.88 219.804 199.349 217.807C204.818 215.811 209.809 212.295 214.323 207.26C218.837 202.139 223.351 194.109 227.865 183.172Z"
                fill={letColour}
              />
              <path
                d="M227.865 183.172L228.072 182.194L227.258 182.021L226.94 182.79L227.865 183.172ZM232.162 184.083L233.115 184.384L233.446 183.334L232.369 183.105L232.162 184.083ZM217.057 232V233H217.791L218.011 232.301L217.057 232ZM80.3385 232H79.3385V233H80.3385V232ZM80.3385 227.182V226.182H79.3385V227.182H80.3385ZM102.995 219.891L103.829 220.442L103.831 220.439L102.995 219.891ZM102.083 65.9842L102.836 65.3257L102.832 65.3209L102.083 65.9842ZM80.3385 60.255H79.3385V61.255H80.3385V60.255ZM80.3385 55.4373V54.4373H79.3385V55.4373H80.3385ZM160.287 55.4373H161.287V54.4373H160.287V55.4373ZM160.287 60.255L160.277 61.255L161.287 61.2643V60.255H160.287ZM140.495 62.8592L140.064 61.9567L140.056 61.9606L140.495 62.8592ZM132.813 215.464L131.924 215.922L131.934 215.941L131.944 215.96L132.813 215.464ZM137.63 219.5L137.259 220.428L137.63 219.5ZM199.349 217.807L199.006 216.868L199.349 217.807ZM214.323 207.26L215.068 207.928L215.073 207.922L214.323 207.26ZM227.657 184.15L231.954 185.062L232.369 183.105L228.072 182.194L227.657 184.15ZM231.208 183.783L216.104 231.699L218.011 232.301L233.115 184.384L231.208 183.783ZM217.057 231H80.3385V233H217.057V231ZM81.3385 232V227.182H79.3385V232H81.3385ZM80.3385 228.182H86.9792V226.182H80.3385V228.182ZM86.9792 228.182C94.6739 228.182 100.38 225.662 103.829 220.442L102.16 219.339C99.1856 223.842 94.215 226.182 86.9792 226.182V228.182ZM103.831 220.439C104.868 218.858 105.575 216.375 106.036 213.13C106.501 209.854 106.729 205.679 106.729 200.62H104.729C104.729 205.63 104.502 209.702 104.056 212.849C103.604 216.028 102.944 218.145 102.159 219.342L103.831 220.439ZM106.729 200.62V86.6873H104.729V200.62H106.729ZM106.729 86.6873C106.729 81.146 106.424 76.6004 105.803 73.0699C105.187 69.5752 104.238 66.9279 102.836 65.3257L101.331 66.6427C102.359 67.8182 103.233 70.0103 103.833 73.4167C104.426 76.7872 104.729 81.2044 104.729 86.6873H106.729ZM102.832 65.3209C99.202 61.2258 93.8554 59.255 86.9792 59.255V61.255C93.471 61.255 98.1939 63.1036 101.335 66.6475L102.832 65.3209ZM86.9792 59.255H80.3385V61.255H86.9792V59.255ZM81.3385 60.255V55.4373H79.3385V60.255H81.3385ZM80.3385 56.4373H160.287V54.4373H80.3385V56.4373ZM159.287 55.4373V60.255H161.287V55.4373H159.287ZM160.296 59.255C150.91 59.1681 144.108 60.0266 140.064 61.9567L140.926 63.7616C144.52 62.0459 150.913 61.1682 160.277 61.255L160.296 59.255ZM140.056 61.9606C136.192 63.8475 133.434 66.2818 131.918 69.313L133.707 70.2074C134.969 67.6831 137.332 65.5166 140.934 63.7577L140.056 61.9606ZM131.918 69.313C131.137 70.8749 130.604 73.3857 130.255 76.72C129.903 80.0886 129.729 84.4129 129.729 89.6821H131.729C131.729 84.4479 131.902 80.2001 132.245 76.928C132.59 73.6217 133.099 71.4233 133.707 70.2074L131.918 69.313ZM129.729 89.6821V200.62H131.729V89.6821H129.729ZM129.729 200.62C129.729 204.25 129.904 207.338 130.26 209.873C130.614 212.396 131.155 214.433 131.924 215.922L133.701 215.005C133.081 213.803 132.581 212.02 132.24 209.595C131.902 207.183 131.729 204.194 131.729 200.62H129.729ZM131.944 215.96C133.111 218.001 134.904 219.487 137.259 220.428L138.002 218.572C136.016 217.777 134.598 216.572 133.681 214.967L131.944 215.96ZM137.259 220.428C137.914 220.691 138.839 220.894 139.976 221.059C141.13 221.227 142.564 221.365 144.272 221.475C147.688 221.693 152.248 221.802 157.943 221.802V219.802C152.266 219.802 147.755 219.694 144.4 219.479C142.722 219.371 141.346 219.238 140.265 219.08C139.167 218.92 138.432 218.743 138.002 218.572L137.259 220.428ZM157.943 221.802H170.833V219.802H157.943V221.802ZM170.833 221.802C184.378 221.802 194.042 220.809 199.692 218.747L199.006 216.868C193.719 218.798 184.372 219.802 170.833 219.802V221.802ZM199.692 218.747C205.338 216.685 210.462 213.065 215.068 207.928L213.579 206.593C209.156 211.525 204.298 214.936 199.006 216.868L199.692 218.747ZM215.073 207.922C219.695 202.678 224.259 194.53 228.789 183.553L226.94 182.79C222.443 193.689 217.979 201.6 213.573 206.599L215.073 207.922Z"
                fill={letColour}
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="512" height="512" fill="white" />
        </clipPath>
        <clipPath id="clip1">
          <rect
            width="352"
            height="180"
            fill="white"
            transform="translate(80 56)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
