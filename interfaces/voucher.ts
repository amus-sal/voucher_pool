export default interface voucherInt {
    addNewVoucher(data: JSON):any
    getVouchersByEmail(email: string):any
    applyVoucherCode(code: string, email: string):any
}