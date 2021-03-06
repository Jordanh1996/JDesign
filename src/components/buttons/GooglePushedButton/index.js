import React from 'react';
import PushedIconButton from '../PushedIconButton';

const GooglePushedButton = (props) => (
    <PushedIconButton
        {...props}
        rounded
        style={Object.assign({ background: 'radial-gradient(#ff4d4d, #ff3333)'}, props.style)}
        label='Sign in with Google'
        labelStyle={{
            fontSize: '24px',
            textShadow: '0 0 2px #e8e8e8',
            letterSpacing: '1px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 600,
            color: 'white'
        }}
        rippleColor='white'
    >
        <svg viewBox="0 0 400 400" style={Object.assign({ width: '1.8rem', height: '1.8rem', marginLeft: '12px' }, props.svgStyle)} className={props.svgClassName}>
            <g id="svgg">
                <path id="path0" d="" stroke="none" fill="#005555" fillRule="evenodd"></path>
                <path id="path1" d="" stroke="none" fill="#246db6" fillRule="evenodd"></path>
                <path id="path2" d="M66.481 257.418 C 49.661 270.300,35.776 280.959,35.624 281.103 C 34.690 281.993,45.772 300.446,53.111 310.223 C 112.997 390.002,228.124 407.476,306.500 348.683 C 310.783 345.470,319.794 337.894,319.559 337.703 C 319.526 337.677,306.495 327.596,290.600 315.301 C 274.705 303.006,261.520 292.789,261.300 292.596 C 260.913 292.258,260.824 292.292,258.600 293.635 C 236.544 306.957,203.337 311.710,175.712 305.500 C 140.244 297.526,110.672 271.348,98.202 236.886 C 97.656 235.377,97.176 234.110,97.135 234.069 C 97.095 234.028,83.300 244.535,66.481 257.418 " stroke="none" fill="#31a952" fillRule="evenodd"></path>
                <path id="path3" d="M200.000 202.100 L 200.000 237.600 249.104 237.600 L 298.208 237.600 298.112 238.050 C 293.353 260.455,280.792 279.282,262.727 291.085 C 261.014 292.205,260.967 292.255,261.327 292.598 C 262.071 293.304,319.411 337.600,319.581 337.600 C 320.048 337.600,328.747 328.651,332.030 324.793 C 332.542 324.192,333.127 323.505,333.330 323.267 C 333.999 322.484,334.329 322.079,336.024 319.972 C 336.946 318.825,337.925 317.584,338.200 317.213 C 338.475 316.842,338.925 316.241,339.200 315.878 C 339.475 315.515,340.060 314.717,340.500 314.106 C 340.940 313.495,341.578 312.613,341.918 312.147 C 356.505 292.138,367.476 264.799,372.103 236.930 C 374.716 221.196,375.786 199.695,374.523 188.300 C 373.775 181.544,373.037 176.815,371.780 170.710 C 371.351 168.626,371.000 166.848,371.000 166.760 C 371.000 166.672,332.525 166.600,285.500 166.600 L 200.000 166.600 200.000 202.100 " stroke="none" fill="#4086f4" fillRule="evenodd"></path>
                <path id="path4" d="M190.400 16.802 C 133.875 19.891,83.103 47.682,50.460 93.400 C 43.964 102.499,34.802 118.256,35.641 118.887 C 35.796 119.004,49.673 129.618,66.479 142.472 C 83.285 155.327,97.108 165.767,97.196 165.672 C 97.285 165.578,97.693 164.555,98.104 163.400 C 122.569 94.532,208.364 69.458,265.570 114.456 C 266.412 115.118,267.194 115.732,267.309 115.821 C 267.438 115.919,277.872 105.628,294.266 89.234 L 321.013 62.486 319.257 60.995 C 316.243 58.438,315.383 57.737,312.476 55.465 C 277.676 28.271,233.948 14.422,190.400 16.802 " stroke="none" fill="#eb4132" fillRule="evenodd"></path>
                <path id="path5" d="" stroke="none" fill="#ff0000" fillRule="evenodd"></path>
                <path id="path6" d="" stroke="none" fill="#80b032" fillRule="evenodd"></path>
                <path id="path7" d="" stroke="none" fill="#f3771c" fillRule="evenodd"></path>
                <path id="path8" d="" stroke="none" fill="#00ff00" fillRule="evenodd"></path>
                <path id="path9" d="M33.703 122.150 C 13.106 166.666,10.986 217.476,27.799 263.600 C 30.397 270.726,35.052 281.312,35.475 281.057 C 35.689 280.927,45.845 273.165,55.700 265.598 C 73.432 251.982,96.429 234.385,96.761 234.178 C 97.137 233.943,97.143 233.876,96.874 233.015 C 90.076 211.201,90.078 188.808,96.880 166.966 L 97.171 166.032 66.290 142.416 C 49.306 129.427,35.374 118.800,35.331 118.800 C 35.288 118.800,34.556 120.308,33.703 122.150 " stroke="none" fill="#fbbe01" fillRule="evenodd"></path>
                <path id="path10" d="" stroke="none" fill="#ffff00" fillRule="evenodd"></path>
            </g>
        </svg>
    </PushedIconButton>
);

export default GooglePushedButton;
