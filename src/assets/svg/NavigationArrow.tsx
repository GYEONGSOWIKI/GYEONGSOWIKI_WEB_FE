interface ArrowIconProps {
    direction: "next" | "previous";
    className?: string;
    width?: number;
    height?: number;
}

const paths = {
    next: "M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z",
    previous: "M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
};

const ArrowIcon = ({ direction, className, width = 11, height = 11 }: ArrowIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 1024 1024"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d={paths[direction]} />
        </svg>
    );
};

export default ArrowIcon;
