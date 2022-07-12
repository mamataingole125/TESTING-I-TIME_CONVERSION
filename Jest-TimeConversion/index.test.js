const time=require("./index")


describe("conversion of miliseconds to time",()=>{

test("5200 ms",()=>{

    expect(time(5200)).toBe("5 seconds 200 milliseconds")

});

test("60000 ms",()=>{

    expect(time(60000)).toBe("1 minute 0 seconds 0 milliseconds")

});

test("180000 ms",()=>{

    expect(time(180000)).toBe("3 minute 0 seconds 0 milliseconds")

});

test("200000 ms",()=>{

    expect(time(200000)).toBe("3 minute 20 seconds 0 milliseconds")

});

test("3600000 ms",()=>{

    expect(time(3600000)).toBe("1 hours 0 minute 0 seconds 0 milliseconds")

});


test("3608026 ms",()=>{

    expect(time(3608026)).toBe("1 hours 0 minute 8 seconds 26 milliseconds")

});


})