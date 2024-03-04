import React from "react";

const TokenInfo = () => {
  return (
    <div>
      <div className="ant-drawer-content-wrapper" style={{ width: "30%" }}>
        <div
          className="ant-drawer-content"
          aria-modal="true"
          role="dialog"
          style={{
            background: "white",
            opacity: 0.95,
            color: "black",
            overflowY: "auto",
          }}
        >
          <div className="ant-drawer-wrapper-body">
            <div className="ant-drawer-header ant-drawer-header-close-only">
              <div className="ant-drawer-header-title">
                <button
                  type="button"
                  aria-label="Close"
                  className="ant-drawer-close"
                ></button>
              </div>
            </div>
            <div className="ant-drawer-body">
              <p className="text-lg absolute top-4 right-4 cursor-pointer">
                ❌
              </p>
              <p className="text-lg absolute top-4 left-4 font-mono font-semibold text-orange-500 flex items-center">
                <img src="token.png" className="h-6 mr-2" alt="Token" /> Token
                Info
              </p>
              <a
                href="https://polygonscan.com/token/0xfd96bf0a43ce3e676d064cd04035b3b849365656"
                target="_blank"
              >
                <p className="text-gray-500 px-2 py-1 bg-gray-300 bg-opacity-60 mt-2 rounded-xl font-medium profile mb-2 cursor-pointer">
                  Token Contract Polygonscan:{" "}
                  <span className="text-purple-500">0xfd96...5656</span>
                </p>
              </a>
              <div className=" h-60">
                <div
                  data-testid="tail-spin-loading"
                  aria-label="tail-spin-loading"
                  aria-busy="true"
                  role="status"
                  style={{ display: "flex" }}
                >
                  {/* Loading spinner SVG */}
                  <svg
                    width="80"
                    height="20"
                    viewBox="0 0 38 38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="8.042%"
                        y1="0%"
                        x2="65.682%"
                        y2="23.865%"
                        id="a"
                      >
                        <stop stopColor="gray" stopOpacity="0" offset="0%" />
                        <stop
                          stopColor="gray"
                          stopOpacity=".631"
                          offset="63.146%"
                        />
                        <stop stopColor="gray" offset="100%" />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <g transform="translate(1 1)">
                        <path
                          d="M36 18c0-9.94-8.06-18-18-18"
                          id="Oval-2"
                          stroke="gray"
                          strokeWidth="2"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="0.9s"
                            repeatCount="indefinite"
                          ></animateTransform>
                        </path>
                        <circle fill="#fff" cx="36" cy="18" r="1">
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="0.9s"
                            repeatCount="indefinite"
                          ></animateTransform>
                        </circle>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="font-medium text-gray-500">
                <p>
                  🔸 <span className="text-green-500">Rewards :</span> NaN%{" "}
                  <span className="text-gray-500">(0 BTCH)</span>
                </p>
                <p>
                  🔸 <span className="text-yellow-500">Liquidity :</span> NaN%{" "}
                  <span className="text-gray-500">(0 BTCH)</span>
                </p>
                <p>
                  🔸 <span className="text-pink-500">Holders :</span> NaN%{" "}
                  <span className="text-gray-500">(0.00 BTCH)</span>
                </p>
              </div>
              {/* ... other parts of the component ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenInfo;
