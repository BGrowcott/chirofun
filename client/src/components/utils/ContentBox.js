function ContentBox({children}) {
    return (
        <div className="p-sm-3 p-1 py-3 mt-1 bg-warm shadow-inset">
            {children}
        </div>
    );
};

export default ContentBox;