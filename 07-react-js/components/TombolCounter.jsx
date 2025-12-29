function TombolCounter() {
    const [jumlah, setJumlah] = React.useState(0);
    const [like, setLike] = React.useState(0);

    return (
        <div>
            <h1>Tombol Counter</h1>
            <h2>Jumlah: {jumlah}</h2>   
            <button className = "btn btn-primary" onClik={() => setJumlah(jumlah + 1)}>tambah</button>
            <button className = "btn btn-secondary" onClik={() => setJumlah(jumlah - 1)}>kurang</button>
            <br />
            <button className = "btn btn-danger"onClik={() => setLike( like + 1)}>like {like}</button>
        </div>
    )
}