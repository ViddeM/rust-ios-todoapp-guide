#[no_mangle]
pub extern "C" fn get_number(input: u32) -> u32 {
    return input + 2;
}
