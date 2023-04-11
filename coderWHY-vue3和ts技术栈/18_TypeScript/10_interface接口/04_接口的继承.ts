type ISwim = {
    swimming: () => void
}

type IFly = {
    flying: () => void
}

interface IAction extends ISwim, IFly {

}

const action: IAction = {
    swimming() {

    },
    flying() {

    },
}