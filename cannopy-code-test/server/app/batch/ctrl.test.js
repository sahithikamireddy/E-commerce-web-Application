
it('gets batches', (done) => {
    ctrl.getBatches(req).then(data => {
        done()
    })
})

it('gets batch by id', (done) => {    
    const req =  {id: '..id..'}
    ctrl.getBatch(req).then(data => {      
      done()
    })
  })