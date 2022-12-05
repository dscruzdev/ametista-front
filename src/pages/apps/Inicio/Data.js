const inicio = () =>
    fetch("http://localhost:8080/front/inicio")
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json());

export {inicio};