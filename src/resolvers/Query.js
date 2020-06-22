function feed(root, args, context, info){
    return context.prisma.links();
}

function info(){
    return `This is the API of Hackernews clone.`;
}

module.exports={
    feed,
    info
}





